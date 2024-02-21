import axios from "axios";
import requests from "./request";

const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_JWT_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
  responseType: "json",
});

export async function createSigeUp(newUserInfo) {
  const response = await jwtInstance.post(
    requests.fetchUserSignin,
    newUserInfo
  );
  console.log(response.data);
  return response.data;
}

export async function createLogin(loginInfo) {
  const response = await jwtInstance.post(requests.fetchUserLogin, loginInfo);
  console.log(response.data);
  return response.data;
}

export async function readUserInfo() {
  const response = await jwtInstance.get(requests.fetchUserUser);
  return response.data;
}

export async function updateUserInfo() {
  const response = await jwtInstance.patch(requests.fetchUserProfile);
  return response.data;
}

jwtInstance.interceptors.response.use(undefined, async (error) => {
  const { config, response } = error;
  const retry = config.retry || 3;
  const delay = config.retryDelay || 1000;
  console.log(retry);

  if (response && retry > 0) {
    config.retry -= 1;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return jwtInstance();
  }
  return Promise.reject(error);
});

async function fetchUserInstance() {
  try {
    const responseUserInfo = await jwtInstance.get(requests.fetchUserInfo);
    console.log(responseUserInfo.status);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.status);
    }
  }
}

export { jwtInstance, fetchUserInstance };
