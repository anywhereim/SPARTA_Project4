import axios from "axios";
import requests from "./request";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
  responseType: "json",
});

axiosInstance.interceptors.response.use(undefined, async (error) => {
  const { config, response } = error;
  const retry = config.retry || 3;
  const delay = config.retryDelay || 1000;

  if (response && retry > 0) {
    config.retry -= 1;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return axiosInstance(config);
  }
  return Promise.reject(error);
});

//letters
export async function createLetter(newLetterData) {
  const response = await axiosInstance.post(
    requests.fetchLetters,
    newLetterData
  );
  return response.data;
}

export async function readLetters() {
  const response = await axiosInstance.get(requests.fetchLetters);
  return response.data;
}

export async function updateLetter(id, updatedLetter) {
  const response = await axiosInstance.patch(
    `${requests.fetchLetters}/${id}`,
    updatedLetter
  );
  return response.data;
}

export async function deleteLetter(id) {
  const response = await axiosInstance.delete(`${requests.fetchLetters}/${id}`);
  return response.data;
}

async function fetchPostInstance() {
  try {
    const responseLetters = await axiosInstance.get(requests.fetchLetters);
    console.log(responseLetters.status);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.status);
    }
  }

  // try {
  //   const responseUserInfo = await axiosInstance.get(requests.fetchUserInfo);
  //   console.log(responseUserInfo.status);
  // } catch (error) {
  //   console.error(error);
  //   if (error.response) {
  //     console.error(error.response.status);
  //   }
  // }
}

export { axiosInstance, fetchPostInstance };
