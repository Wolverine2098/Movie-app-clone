export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const ADD_UNFAVOURITE = "ADD_UNFAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
// these are known as action types

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
export function addUnFavourite(movie) {
  return {
    type: ADD_UNFAVOURITE,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}
// these are action creators
