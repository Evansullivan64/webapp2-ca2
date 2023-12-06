
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState,useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";
import { Link } from "react-router-dom";
import MovieReviews from "../movieReviews"
import { useParams } from 'react-router-dom';
import { getMovieRecommendations,getMovieCredits } from "../../api/tmdb-api";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => { 
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [credits, setCredits] = useState([]);


  useEffect(() => {
    if (movie.id) {
      getMovieRecommendations(movie.id)
        .then(data => setRecommendations(data.results || []))
        .catch(error => console.error('Error fetching recommendations:', error));

        getMovieCredits(movie.id)
        .then(data => setCredits(data.cast || [])) 
        .catch(error => console.error('Error fetching movie credits:', error));
    }
  }, [movie]);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={root}>
  <li>
    <Chip
      label="Movie Credits"
      sx={chip}
      color="primary"
    />
  </li>
  {credits.map((member) => (
    <li key={member.id}>
      <Link to={`/actor/${member.name}`}>
        <Chip label={member.name} sx={chip} clickable />
      </Link>
    </li>
  ))}
</Paper>


      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      <Typography variant="h5" component="h3">
        Recommendations
      </Typography>
      <Link to={`/movie/${movie.id}/recommendations`}>
        <button class="button">View Recommendations</button>
      </Link>

      </>
  );
};
export default MovieDetails ;