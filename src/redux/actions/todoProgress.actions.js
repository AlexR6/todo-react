import {
  GET_TODO_PROGRESS,
  SCROLL_GET_TODO_PROGRESS,
  REMOVE_TODO_PROGRESS,
  UPDATE_TODO_PROGESS,
} from "../reducers/todoProgress.reducer";
import {
  getTodosWithOffsetAndLimit,
  updateStatusTodo,
  updateTodo,
} from "../../services/todo.services";

export const actionGetTodosScroll = (
  dispatch,
  offset,
  setOffset,
  limit,
  categorySelected
) =>
  getTodosWithOffsetAndLimit(1, offset, limit, categorySelected).then((res) => {
    setOffset(res.data.length + offset);
    dispatch({ type: SCROLL_GET_TODO_PROGRESS, payload: res.data });
  });

export const actionGetTodos = (dispatch, offset, setOffset, categorySelected) =>
  getTodosWithOffsetAndLimit(1, offset, 10, categorySelected).then((res) => {
    setOffset(res.data.length + offset);
    console.log(res.data);
    dispatch({ type: GET_TODO_PROGRESS, payload: res.data });
  });

export const actionGetOneTodo = (dispatch, offset) =>
  getTodosWithOffsetAndLimit(1, offset, 1).then((res) => {
    dispatch({ type: SCROLL_GET_TODO_PROGRESS, payload: res.data });
  });

export const actionUpdateStatusTodo = (dispatch, todoId) =>
  updateStatusTodo(todoId, 0).then((res) => {
    dispatch({ type: REMOVE_TODO_PROGRESS, payload: res.data });
  });

export const actionUpdateTodo = (
  name,
  description,
  todoId,
  setFormIsActive,
  dispatch
) =>
  updateTodo(name, description, todoId).then((res) => {
    dispatch({ type: UPDATE_TODO_PROGESS, payload: res.data });
    setFormIsActive(false);
  });
