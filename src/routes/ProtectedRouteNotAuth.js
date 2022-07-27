import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRouteNotAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (auth.isConnected) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRouteNotAuth;
