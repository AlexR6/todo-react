import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBarLeft from "../components/NavBarLeft";
import TodoProgress from "../views/TodoProgress";
import TodoEnd from "../views/TodoEnd";
import Login from "../views/Login";
import Logout from "../views/Logout";
import CreateTodo from "../views/CreateTodo";
import CreateCategory from "../views/CreateCategory";
import ProtectedRouteAuth from "./ProtectedRouteAuth";
import ProtectedRouteNotAuth from "./ProtectedRouteNotAuth";
import { useSelector } from "react-redux";

const Index = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="container pt-5">
      <Router>
        <div className="row">
          {auth.isConnected ? <NavBarLeft /> : <></>}
          <div className="col-10">
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
              <Route
                path="/login"
                element={
                  <ProtectedRouteNotAuth>
                    <Login />
                  </ProtectedRouteNotAuth>
                }
              />
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
        </div>
      </Router>
    </div>
  );
};

export default Index;
