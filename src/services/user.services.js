import axios from "axios";

export async function getUser() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_URL_API}user/me`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
    },
  });
}
