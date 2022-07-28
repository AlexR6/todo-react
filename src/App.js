import React, { useEffect } from "react";
import Router from "./routes";
import { useDispatch } from "react-redux";
import { LOGIN, LOGOUT } from "./redux/reducers/auth.reducer";
import { getUser } from "./services/user.services";
import { GET_USER } from "./redux/reducers/user.reducer";

function App() {
  const dispatch = useDispatch();
  // if (
  //   window.localStorage.getItem("access_token") &&
  //   window.localStorage.getItem("duration_access_token")
  // ) {
  //   if (window.localStorage.getItem("duration_access_token") >= Date.now()) {
  //     dispatch({ type: LOGOUT });
  //   }
  //   getUser().then((res) => {
  //     dispatch({ type: GET_USER, payload: res.data.user });
  //     dispatch({ type: LOGIN });
  //   });
  // }
  // useEffect(() => {
  //   if (
  //     window.localStorage.getItem("access_token") &&
  //     window.localStorage.getItem("duration_access_token")
  //   ) {
  //     if (window.localStorage.getItem("duration_access_token") >= Date.now()) {
  //       dispatch({ type: LOGOUT });
  //     }
  //     getUser().then((res) => {
  //       dispatch({ type: GET_USER, payload: res.data.user });
  //       dispatch({ type: LOGIN });
  //     });
  //   }
  // }, []);
  return <Router />;
}

export default App;
