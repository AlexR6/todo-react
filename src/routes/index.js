import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TodoProgress from "../views/TodoProgress";
import TodoEnd from "../views/TodoEnd";
import Login from "../views/Login";
import Logout from "../views/Logout";
import CreateTodo from "../views/CreateTodo";
import CreateCategory from "../views/CreateCategory";
import ProtectedRouteAuth from "./ProtectedRouteAuth";
import { useSelector } from "react-redux";
import NavBarTop from "../components/NavBarTop";

const Index = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="container">
      <Router>
        {auth.isConnected ? <NavBarTop /> : <></>}
        <div className="mx-auto col-12 col-xl-6">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRouteAuth>
                  <TodoProgress />
                </ProtectedRouteAuth>
              }
            />
            <Route
              path="/terminer"
              element={
                <ProtectedRouteAuth>
                  <TodoEnd />
                </ProtectedRouteAuth>
              }
            />
            <Route
              path="/ajout/todo"
              element={
                <ProtectedRouteAuth>
                  <CreateTodo />
                </ProtectedRouteAuth>
              }
            />
            <Route
              path="/ajout/categorie"
              element={
                <ProtectedRouteAuth>
                  <CreateCategory />
                </ProtectedRouteAuth>
              }
            />
            {!auth.isConnected ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <></>
            )}
            <Route
              path="/logout"
              element={
                <ProtectedRouteAuth>
                  <Logout />
                </ProtectedRouteAuth>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Index;
