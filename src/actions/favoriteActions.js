export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";

export const addFavorites = (movie) => {
  return { type: ADD_FAV, payload: movie };
};
export const delFavorites = (id) => {
  return { type: DEL_FAV, payload: id };
};
