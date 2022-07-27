const initialState = [];

export const GET_CATEGORY = "GET_CATEGORY";

function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export default CategoryReducer;
