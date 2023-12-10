  export const getMovieReviews = (id) => {
  
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };



  // export const getMovies = async (page) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  //     );
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw new Error('Failed to fetch data');
  //   }
  // };

  export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getNowPlayingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/nowPlaying', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };
  
  export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  // export const getMovie = async () => {
  //   const response = await fetch(
  //     'http://localhost:8080/api/movies/:id', {
  //     headers: {
  //       'Authorization': window.localStorage.getItem('token')
  //     }
  //   }
  //   )
  //   return response.json();
  // };

  

 export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

// export const getGenres = async () => {
//   const response = await fetch(
//     'http://localhost:8080/api/movies/tmdb/genres', {
//     headers: {
//       'Authorization': window.localStorage.getItem('token')
//     }
//   }
//   )
//   return response.json();
// };
  
export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};




export const getTrendingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/trending', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
 
// export const getUpcomingMovies = async (page) => {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//     );
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Failed to fetch data');
//   }
// };

export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

// export const getUpcomingMovies = async (page) => {
//   const response = await fetch('http://localhost:8080/api/movies/tmdb/upcoming', {
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       method: 'get',
     
//   });
//   return response.json();
// };

export const getMovieRecommendations = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/recommendations', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};


export const getMovieReleaseDates = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};




export const getActorsMovies = async (page, actorName) => {
  try {
    const response = await fetch(
      //https://developer.themoviedb.org/docs/search-and-query-for-details
      `https://api.themoviedb.org/3/search/person?query=${actorName}&api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    const data = await response.json();
    const actorId = data.results[0].id;

    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_cast=${actorId}&api_key=${process.env.REACT_APP_TMDB_KEY}`
    );

    if (!movieResponse.ok) {
      throw new Error(movieResponse.json().message);
    }

    const moviesData = await movieResponse.json();
    return moviesData;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

