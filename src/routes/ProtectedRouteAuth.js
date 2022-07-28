import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN, LOGOUT } from "../redux/reducers/auth.reducer";
import { getUser } from "../services/user.services";
import { GET_USER } from "../redux/reducers/user.reducer";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  if (
    window.localStorage.getItem("access_token") &&
    window.localStorage.getItem("duration_access_token")
  ) {
    if (window.localStorage.getItem("duration_access_token") >= Date.now()) {
      dispatch({ type: LOGOUT });
      return <Navigate to="/login" replace />;
    }
    getUser().then((res) => {
      dispatch({ type: GET_USER, payload: res.data.user });
      dispatch({ type: LOGIN });
    });
    return children;
  }
};

export default ProtectedRoute;
