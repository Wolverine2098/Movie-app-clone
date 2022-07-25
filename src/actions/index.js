export const ADD_MOVIES = "ADD_MOVIES";
// these are known as action types

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
// these are action creators
