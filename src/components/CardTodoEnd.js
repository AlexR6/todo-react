import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionUpdateStatusTodo,
  actionGetOneTodo,
  actionDeleteOneTodo,
} from "../redux/actions/todoEnd.actions";
import { getCategoryWhereId } from "../services/category.services";

const CardTodoEnd = (props) => {
  const todos = useSelector((state) => state.todoEnd);
  const { id, name, description, createdAt, endAt, categoryId } = { ...props };
  const dateCreatedAt = new Date(createdAt).toLocaleDateString("fr");
  const dateEndAt = new Date(endAt).toLocaleDateString("fr");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    actionUpdateStatusTodo(dispatch, id);
    actionGetOneTodo(dispatch, todos.length);
  };

  const handleDelete = () => {
    actionDeleteOneTodo(dispatch, id);
    actionGetOneTodo(dispatch, todos.length);
  };

  useEffect(() => {
    if (categoryId) {
      getCategoryWhereId(categoryId).then((res) => setCategory(res.data));
    }
  }, []);

  return (
    <div className="card mb-4  card-main">
      <button
        className="no-btn btn-archived"
        onClick={handleUpdateStatus}
      ></button>
      <div className="card-body">
        <div className="row">
          <h5 className="card-title col-6 text-start">{name}</h5>
          <p className="card-subtitle mb-2 text-muted col-6 text-end">
            {dateCreatedAt}
          </p>
        </div>
        <p className="mb-2">Todo terminée le : {dateEndAt}</p>
        <p className="card-text">{description}</p>
        <p className="badge" style={{ backgroundColor: category.color }}>
          {category.name}
        </p>
        <button className="btn-icon" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardTodoEnd;
