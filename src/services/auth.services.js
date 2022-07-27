import axios from "axios";
export async function signin(email, password) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL_API}auth/signin`,
    data: {
      email,
      password,
    },
  });
}

export async function signup(email, password) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL_API}auth/signup`,
    data: {
      email,
      password,
    },
  });
}
