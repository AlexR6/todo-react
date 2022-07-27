import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionUpdateStatusTodo,
  actionGetOneTodo,
} from "../redux/actions/todoEnd.actions";

const CardTodoEnd = (props) => {
  const todos = useSelector((state) => state.todoEnd);
  const { id, name, description, createdAt, endAt } = { ...props };
  const dateCreatedAt = new Date(createdAt).toLocaleDateString("fr");
  const dateEndAt = new Date(endAt).toLocaleDateString("fr");
  const dispatch = useDispatch();

  const handleClick = () => {
    actionUpdateStatusTodo(dispatch, id);
    actionGetOneTodo(dispatch, todos.length);

    console.log("progess", todos.length);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <h5 className="card-title col-6 text-start">{name}</h5>
          <p className="card-subtitle mb-2 text-muted col-6 text-end">
            {dateCreatedAt}
          </p>
        </div>
        <p className="mb-2">Todo terminée le : {dateEndAt}</p>
        <p className="card-text">{description}</p>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleClick}>
            Je n'ai pas finis cette ToDo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTodoEnd;
