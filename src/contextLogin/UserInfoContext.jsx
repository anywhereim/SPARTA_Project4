import { createContext, useEffect, useState } from "react";
import {
  createSigeUp,
  createLogin,
  readUserInfo,
  updateUserInfo,
} from "../api/jwtInstance";

export const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  const [userInfomation, setUserInfomation] = useState([]);
  const [loginUser, setLoginUser] = useState({});
  const [loginResponse, setLoginResponse] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await readUserInfo();
      // const matchUser = a;
      setUserInfomation(response);
      console.log("가져오고있어?", response);
    } catch (error) {
      console.error("Get readUserInfo Error");
    }
  };

  // 최초 렌더링 시
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const storageUserInfo = localStorage.getItem("userInfo");
  //     if (storageUserInfo) {
  //       const userInfo = JSON.parse(storageUserInfo);
  //       setUserInfomation(userInfo);
  //       await fetchUserData();
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);

  //로그인
  const onLoginInfo = async (loginInfo) => {
    try {
      const response = await createLogin(loginInfo);
      // localStorage.setItem("authToken", token);
      setLoginResponse(response);
    } catch (error) {
      console.error("Get onLoginInfo fail", error.state);
    }
  };

  //회원가입
  const onAddSignup = async (newUserInfo) => {
    try {
      const data = await createSigeUp(newUserInfo);
    } catch (error) {
      console.error("Get createUserInfo fail", error.state);
    }
  };

  //login

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      setLoginUser(userInfo);
    }
  }, []);
  return (
    <UserInfoContext.Provider
      value={{
        userInfomation,
        loginUser,
        setLoginUser,
        onAddSignup,
        onLoginInfo,
        loginResponse,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
