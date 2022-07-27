import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/reducers/auth.reducer";
import { REMOVE_USER } from "../../redux/reducers/user.reducer";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("duration_access_token");
    dispatch({ type: REMOVE_USER });
    dispatch({ type: LOGOUT });
  });
  return <div></div>;
};

export default Index;
