import axios from "axios";

export async function getTodosWithOffsetAndLimit(
  active,
  offset,
  limit,
  category
) {
  console.log(category);
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL_API}todo/all/${active}/${offset}/${limit}/${category}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
  });
}

export async function createTodo(name, description, categoryId) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL_API}todo/new`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
    data: {
      name,
      description,
      categoryId,
    },
  });
}

export async function updateTodo(name, description, id) {
  return axios({
    method: "PUT",
    url: `${process.env.REACT_APP_URL_API}todo/update/${id}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
    data: {
      name,
      description,
    },
  });
}

export async function updateStatusTodo(todoId, status) {
  return axios({
    method: "PUT",
    url: `${process.env.REACT_APP_URL_API}todo/update/status/${todoId}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
    data: {
      status,
    },
  });
}

export async function deleteTodo(todoId) {
  return axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_URL_API}todo/delete/${todoId}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
  });
}
