import axios from "axios";

export async function createCategory(name, color) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL_API}category/new`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
    data: {
      name,
      color,
    },
  });
}

export async function getCategories() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL_API}category/all`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
  });
}
