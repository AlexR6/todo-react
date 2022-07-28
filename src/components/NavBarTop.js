import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const NavBarTop = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {auth.isConnected ? (
        <div
          className="collapse navbar-collapse justify-content-center pb-5"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active list-group-item mx-2"
                  : "list-group-item mx-2"
              }
            >
              Todo en cours
            </NavLink>
            <NavLink
              to="/terminer"
              className={({ isActive }) =>
                isActive
                  ? "active list-group-item mx-2"
                  : "list-group-item mx-2"
              }
            >
              Todo terminer
            </NavLink>
            <NavLink
              to="/ajout/todo"
              className={({ isActive }) =>
                isActive
                  ? "active list-group-item mx-2"
                  : "list-group-item mx-2"
              }
            >
              Ajouter une Todo
            </NavLink>
            <NavLink
              to="/ajout/categorie"
              className={({ isActive }) =>
                isActive
                  ? "active list-group-item mx-2"
                  : "list-group-item mx-2"
              }
            >
              Ajouter une Categorie
            </NavLink>
            <NavLink
              to="logout"
              className={({ isActive }) =>
                isActive
                  ? "active list-group-item mx-2"
                  : "list-group-item mx-2"
              }
            >
              Déconnexion
            </NavLink>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default NavBarTop;
