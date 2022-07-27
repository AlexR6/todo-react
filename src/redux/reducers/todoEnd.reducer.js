const initialState = [];

export const GET_TODO_END = "GET_TODO_END";
export const SCROLL_GET_TODO_END = "SCROLL_GET_TODO_END";
export const REMOVE_TODO_END = "REMOVE_TODO_END";

function TodoEndReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODO_END:
      return action.payload;
    case SCROLL_GET_TODO_END:
      if (action.payload.length > 0) return state.concat(action.payload);
      return state;
    case REMOVE_TODO_END:
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
}

export default TodoEndReducer;
