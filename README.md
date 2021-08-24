# Web App Dev 2: Web API Labs

Practical labs and second assignment for the WAD2 module, BSc. Applied/Software Systems Dev/Forensics  


# Assignment 2 - Web API.

### Evan Doyle - Computer Forensics & Security (20085432)

## Features.
 There are 4 movie viewing pages, home page, upcoming movies, top rated movies, and popular movies.
 An authenticated user can add movies from home page and top rated to their favourites.
 They can also add movies from upcoming page to their watchlist.
 Users can select movies to view details about the movie.
 Users can write reviews on movies.
 Users can filter each page by title or genre.

## Installation Requirements

To install this project, follow the steps seen below:

```
git clone https://github.com/EvnDyle/wad-api-labs-2021.git
```

```
npm install
```

```
npm start
```

A note:
The solution uploaded from the moviesApi lab containing the mongoDB must be running for this app to function. 

## API Configuration
Create an .env file with the following along with your TMDB API key. 

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY={api_key}
mongoDB=mongodb://localhost:27017/movies_db
SEED_DB=true
SECRET={secret}


## API Design
Here si an overview of the design: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a specific Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get list of reviews for specific movie | N/A | N/A | N/A
| /api/users/${username}/favourites | Gets list of favourited movies for a specific user | N/A | N/A | N/A  
| /api/users | Gets all users | Add a user | N/A | N/A
| /api/genres | Gets all genres | N/A | N/A | N/A
| /api/upcoming | Gets list of upcoming movies | N/A | N/A | N/A
| /api/toprated | Gets list of top rated movies | N/A | N/A | N/A
| /api/popular | Gets list of popular movies | N/A | N/A | N/A



## Security and Authentication
The movie views are not visible to an unauthenticated user using private routes. There is a provided sign-up page to become authenticated. 

