export const login = (username, password) => {
    return fetch(`/api/users`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch(`/api/users?action=register`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};


export const getMovie = id => {
  return fetch(
    `/api/movies/${id}`,{headers:{
      'Authorization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getMovies = () => {
  return fetch(
    '/api/movies',{headers:{
      'Authorization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
  
  
  export const getGenres = () => {
    return fetch(
        '/api/genres',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    )
    .then(res => res.json());
};


export const getUpcoming = () => {
    return fetch(
        '/api/upcoming',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': window.localStorage.getItem('token')
         }
       }
       ).then(res => res.json());
     };

export const getTopRated = () => {
    return fetch(
        '/api/topRated',{headers: {
            'Authorization': window.localStorage.getItem('token')
         }
       }
       ).then(res => res.json());
     };

export const getPopular = () => {
    return fetch(
        '/api/popular',{headers: {
            'Authorization': window.localStorage.getItem('token')
         }
       }
       ).then(res => res.json());
     };

  export const getFavourites = (username) => {
    return fetch(
       `/api/users/${username}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const addFavourite = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }
    ).then(res => res.json());
};

  export const getMovieReviews = id => {
    return fetch(
        `/api/movies/${id}/reviews`,{headers: {
            'Authorization': window.localStorage.getItem('token')
         }
       }
       ).then(res => res.json());
     };