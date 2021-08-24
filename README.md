# Web App Dev 2: Web API Labs

Practical labs and second assignment for the WAD2 module, BSc. Applied/Software Systems Dev/Forensics  


# Assignment 2 - Web API.

### Steven Guiry - Computer Forensics & Security (20053842)

## Features.
 
 ### Unregistered User
 + Login/Sign status must be activated in order to view movie views.
 + Login with username/password if registered.
 + Register if yet to set up account.

 ### Registered User
 + Three movie viewing pages, default/home page, upcoming movies page and top rated movies page.
 + Can add movies from home page and top rated to favourites page.
 + Can add movies from upcoming page to watchlist.
 + Select a movie to view details such as information about movie, the cast, reviews and the trailer.
 + Can write a review on movies in your watchlist/favourites page.
 + Can search the lists by title or filter to certain genres.
 + Logging added which lists any server request to the console.

## Installation Requirements

Clone this repository using the following link:

```bat
git clone https://github.com/StevenGuiry/wad-asgn2.git
```

Install the Node Package Manager:

```bat
npm install
```

Start the server:

```bat
npm start
```

## API Configuration
Create an .env file with the following along with your TMDB API key. 

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```


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
