import React, { useEffect } from "react";
import Router from "./routes";
import { useDispatch } from "react-redux";
import { LOGIN, LOGOUT } from "./redux/reducers/auth.reducer";
import { getUser } from "./services/user.services";
import { GET_USER } from "./redux/reducers/user.reducer";
import "./assets/style.scss";
import { actionGetCategories } from "./redux/actions/category.actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      window.localStorage.getItem("access_token") &&
      window.localStorage.getItem("duration_access_token")
    ) {
      if (
        window.localStorage.getItem("duration_access_token") <=
        Math.floor(Date.now() / 1000)
      ) {
        window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("duration_access_token");
        dispatch({ type: LOGOUT });
        document.location.href = "/login";
      } else {
        getUser()
          .then((res) => {
            dispatch({ type: GET_USER, payload: res.data.user });
            dispatch({ type: LOGIN });
          })
          .catch((err) => {
            if (err.response.status) {
              window.localStorage.removeItem("access_token");
              window.localStorage.removeItem("duration_access_token");
              document.location.href = "/login";
            }
          });
        actionGetCategories(dispatch);
      }
    }
  }, []);
  return <Router />;
}

export default App;
