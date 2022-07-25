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
export default function movies(state = initialMoviesState, action) {
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
