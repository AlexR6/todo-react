import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  if (
    window.localStorage.getItem("access_token") &&
    window.localStorage.getItem("duration_access_token")
  ) {
    if (window.localStorage.getItem("duration_access_token") >= Date.now()) {
      console.log("ici");
      return <Navigate to="/login" replace />;
    }
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
