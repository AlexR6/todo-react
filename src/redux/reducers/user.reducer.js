const initialState = {};

export const GET_USER = "GET_USER";
export const REMOVE_USER = "REMOVE_USER";

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case REMOVE_USER:
      return state;
    default:
      return state;
  }
}

export default UserReducer;
