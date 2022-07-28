import axios from "axios";
export async function signin(pseudo, password) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL_API}auth/signin`,
    data: {
      pseudo,
      password,
    },
  });
}

export async function signup(pseudo, password) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL_API}auth/signup`,
    data: {
      pseudo,
      password,
    },
  });
}
