# Assignment 2 - Web API.

Name: Evann Sullivan

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + login and signup page
 + protected routes
 + use of Movies-api to retrieve tmdb data

## Setup requirements.

+ open two terminals, one in movies folder, and one in movies-api folder
+ in movies folder type npm start
+ in movies-api folder type npm run dev

## API Configuration

add an .env file into movies-api folder. in it tpye in your TMDB api key in the TMDB_KEY slot.

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
TMDB_KEY=key_here
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /tmdb/upcoming |get| upcoming movies
- /tmdb/genres |get| all the genres in TMDB
- /tmdb/trending |get| all thee trending movies for the current week
- /tmdb/nowPlaying |get| all the movies in cinema right now
- /tmdb/recommendations |get| all the recomendations for the selected movie
- / |get| all movies
- /:id |get| gte movie by that id


## Security and Authentication

for security and authentication i am using JSON Web Tokens(JWT).
Once logged out, the user can see the default movie list, their favourites, and the login button. they can see each movie and filter on them. they can see movie details but cannot see any reviews until logged in.
once logged in the user can see everything. 

## Integrating with React App

the react app is inegrated witht he api through the folllowwing steps: 
1. a page in movies will call a method from src/api/tmdb-api
2. that method will simply call upon a route in the movies-api eg. localhost:8080/api/movies/tmdb/upcoming
3. in movies-api/api/movies/index there will be a route for that called method router.get('/tmdb/upcoming', asyncHandler(async (req, res)
4. when this route is called, the method inside will be called. getUpcomingMovies(); this method is called in movies-api/api/tmdb-api
5. the method then calls the tmdb database to retrieve the data.

views using the api:
+ home
+ upcoming
+ favourite
+ trending
+ nowplaying
+ login
+ signup

