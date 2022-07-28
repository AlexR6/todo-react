import {
  GET_TODO_END,
  SCROLL_GET_TODO_END,
  REMOVE_TODO_END,
  DELETE_TODO,
} from "../reducers/todoEnd.reducer";
import {
  deleteTodo,
  getTodosWithOffsetAndLimit,
  updateStatusTodo,
} from "../../services/todo.services";

export const actionGetTodosScroll = (
  dispatch,
  offset,
  setOffset,
  limit,
  categorySelected
) =>
  getTodosWithOffsetAndLimit(0, offset, limit, categorySelected).then((res) => {
    setOffset(res.data.length + offset);
    dispatch({ type: SCROLL_GET_TODO_END, payload: res.data });
  });

export const actionGetTodos = (dispatch, offset, setOffset, categorySelected) =>
  getTodosWithOffsetAndLimit(0, offset, 10, categorySelected).then((res) => {
    setOffset(res.data.length + offset);
    dispatch({ type: GET_TODO_END, payload: res.data });
  });

export const actionGetOneTodo = (dispatch, offset) =>
  getTodosWithOffsetAndLimit(0, offset, 1).then((res) => {
    dispatch({ type: SCROLL_GET_TODO_END, payload: res.data });
  });

export const actionUpdateStatusTodo = (dispatch, todoId) =>
  updateStatusTodo(todoId, 1).then((res) => {
    dispatch({ type: REMOVE_TODO_END, payload: res.data });
  });

export const actionDeleteOneTodo = (dispatch, todoId) =>
  deleteTodo(todoId).then((res) => {
    dispatch({ type: DELETE_TODO, payload: res.data });
  });
