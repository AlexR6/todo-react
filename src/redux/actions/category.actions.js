import {
  createCategory,
  getCategories,
} from "../../services/category.services";
import {
  GET_CATEGORIES,
  CREATE_CATEGORIES,
} from "../reducers/category.reducer";

export const actionGetCategories = (dispatch) =>
  getCategories().then((res) => {
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  });

export const actionCreateCategory = (
  dispatch,
  name,
  color,
  setMessageSuccess,
  setMessagesError
) => {
  createCategory(name, color)
    .then((res) => {
      setMessagesError([]);
      setMessageSuccess(true);
      dispatch({ type: CREATE_CATEGORIES, payload: res.data });
    })
    .catch((err) => {
      if (err.response.data.message) {
        setMessagesError(err.response.data.message);
        setMessageSuccess(false);
      }
    });
};
