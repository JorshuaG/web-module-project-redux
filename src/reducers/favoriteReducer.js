import { ADD_FAV, DEL_FAV, TOG_FAV } from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case DEL_FAV:
      return {
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    case TOG_FAV:
      return { ...state, displayFavorites: action.payload };

    default:
      return state;
  }
};

export default favReducer;
