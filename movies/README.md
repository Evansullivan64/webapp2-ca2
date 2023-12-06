# Assignment 1 - ReactJS app.

Name: Evan Sullivan

## Overview.

This repo contains my assignment 1 react web app.

## About The Project

![App Screenshot](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/fe9c6301-87eb-4a0a-8172-c2cb90ce8cab)

The React Movie App is designed to present various movie details, genres, cast information, and user reviews. It includes:
- **Home Screen**: Displays the latest movies.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/b2327398-ae97-4ff3-ad75-1e8eb296d189)

- **Favourites Page**: Shows the user's favorite movies.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/71eaa094-5d94-443c-bf0d-c88b962fddb1)

- **Upcoming Movies Screen**: Lists upcoming movie releases.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/b3210621-0ddb-4c92-8c82-249367e94e18)

- **Now Playing Screen**: Displays movies currently showing in cinemas.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/974ca4ed-1f69-44da-9b91-cd30c0bc8f86)

- **Trending Screen**: Lists popular movies based on user views.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/13b9915a-ba7e-4a58-bbb0-e9acdb50151a)

- **Filter Option**: Allows users to filter movies based on title, category, or both.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/737ce1c7-7437-49ab-8d51-be86c4794bfe)

- **Favorites Feature**: Users can mark favorite movies with a heart icon.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/23769df9-055a-4dd7-97bf-0180c19f6587)

- **Movie Details Section**: Shows movie overview, genres, revenue, rating, release date, cast, and recommended movies.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/851da41a-35f6-4f61-813d-ecdd9a43da16)
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/15ff0e66-c2b8-455c-aa0d-f76ff5f67c32)


- **Reviews Section**: Users can view and write reviews for a specific movie.
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/df071105-0edf-4781-9093-777737411dec)
- ![image](https://github.com/Evansullivan64/movies-app-assignment/assets/99019007/444e958c-e4d4-4d9e-93c4-e1ed863412ee)


## Built With

- ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![JQuery.com](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)


### Features.

+ NowPLaying page
+ Trending movies page
+ movie recomendations based on the selected movie
+ Display movie actors for that movie
+ Pagination
+ linking between actors and their movies

## Setup requirements.


1. Open the terminal inside the project folder and run:
    ```sh
    cd movies
    ```
2. Start the application:
    ```sh
    npm install
    ```
    ```sh
    npm start
    ```


## API endpoints.


+ show any new and upcoming movies - movies/upcoming
+ Show movies that are in the cinema as of now - movies/nowPlaying
+ show the most watched movies this month - movies/trending
+ show movie recomendations based off the chosen movie - movie/:id/recommendations

## Routing

## Independent learning