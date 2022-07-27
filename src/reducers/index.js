import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  ADD_UNFAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMoviesState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //       ...state,
  //       list: action.movies,
  //     };
  //   }
  //   return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case ADD_UNFAVOURITE:
      const index = state.favourites.indexOf(action.movie);
      return {
        ...state,
        favourites: [
          ...state.favourites.slice(0, index),
          ...state.favourites.slice(index + 1, state.favourites.length),
        ],
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  return state;
}
const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
// we can have only one default function
export function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}

export default combineReducers({
  movies: movies,
  search: search,
});
