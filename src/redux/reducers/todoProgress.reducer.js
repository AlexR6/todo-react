const initialState = [];

export const GET_TODO_PROGRESS = "GET_TODO_PROGRESS";
export const SCROLL_GET_TODO_PROGRESS = "SCROLL_GET_TODO_PROGRESS";
export const REMOVE_TODO_PROGRESS = "REMOVE_TODO_PROGRESS";
export const UPDATE_TODO_PROGESS = "UPDATE_TODO_PROGESS";

function TodoProgressReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODO_PROGRESS:
      return action.payload;
    case SCROLL_GET_TODO_PROGRESS:
      if (action.payload.length > 0) return state.concat(action.payload);
      return state;
    case REMOVE_TODO_PROGRESS:
      return state.filter((item) => item._id !== action.payload._id);
    case UPDATE_TODO_PROGESS:
      return state.map((item) => {
        if (item._id == action.payload._id) {
          return action.payload;
        }
        return item;
      });
    default:
      return state;
  }
}

export default TodoProgressReducer;
