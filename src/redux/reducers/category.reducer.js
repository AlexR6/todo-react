const initialState = [];

export const GET_CATEGORIES = "GET_CATEGORIES";
export const CREATE_CATEGORIES = "CREATE_CATEGORIES";

function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case CREATE_CATEGORIES:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}

export default CategoryReducer;
