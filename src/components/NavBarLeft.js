import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLeft = () => {
  return (
    <div className="mx-auto list-group col-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active list-group-item" : "list-group-item"
        }
      >
        Todo en cours
      </NavLink>
      <NavLink
        to="/terminer"
        className={({ isActive }) =>
          isActive ? "active list-group-item" : "list-group-item"
        }
      >
        Todo terminer
      </NavLink>
      <NavLink
        to="/ajout/todo"
        className={({ isActive }) =>
          isActive ? "active list-group-item" : "list-group-item"
        }
      >
        Ajouter une Todo
      </NavLink>
      <NavLink
        to="/ajout/categorie"
        className={({ isActive }) =>
          isActive ? "active list-group-item" : "list-group-item"
        }
      >
        Ajouter une Categorie
      </NavLink>
      <NavLink
        to="logout"
        className={({ isActive }) =>
          isActive ? "active list-group-item" : "list-group-item"
        }
      >
        Déconnexion
      </NavLink>
    </div>
  );
};

export default NavBarLeft;
