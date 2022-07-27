const initialState = {
  isConnected: false,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { isConnected: true };
    case LOGOUT:
      return { isConnected: false };
    default:
      return state;
  }
}

export default AuthReducer;
