import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useInput from "../components/hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { UserInfoContext } from "../contextLogin/UserInfoContext";

export default function LoginForm() {
  const { loginResponse, onLoginInfo } = useContext(UserInfoContext);

  const [id, nameHandler] = useInput("");
  const [password, passWordHandler, passsWordInitialValue] = useInput("");
  const [nickName, nickNameHandler] = useInput("");

  const [openRoom, setOpenRoom] = useState();
  // const [loginUser, setLoginUser] = useState([]);

  // useEffect(() => {
  //   openRoom;
  // }, []);

  console.log(openRoom);

  const navigate = useNavigate();

  const handleLoginInfoSubit = (e) => {
    e.preventDefault();

    onLoginInfo({
      id,
      password,
    });

    if (loginResponse) {
      alert(`안녕하세요 ${id}님!🎉`);
      navigate("/");
      setOpenRoom(loginResponse);
    } else {
      alert("아이디와 비밀번호를 다시 확인해주세요😖");
    }

    // const findUserName = userInfomation.find(
    //   (user) => user.id === id && user.passsword === passsword
    // );

    // if (findUserName) {
    //   alert(`안녕하세요 ${findUserName.name}님!🎉`);
    //   localStorage.setItem("userInfo", JSON.stringify(findUserName));
    //   console.log("찾은유저정보", findUserName);
    //   navigate("/");
    // } else {
    //   alert("아이디와 비밀번호를 다시 확인해주세요");
    //   return;
    // }
    passsWordInitialValue("");
  };

  return (
    <LoginBox>
      <LoginInpustForm>
        <Title>로그인</Title>
        <InputBoxs>
          <Inputs
            type="text"
            value={id}
            onChange={nameHandler}
            placeholder="아이디를 입력해주세요"
            maxLength={10}
          />
          <Inputs
            type="password"
            value={password}
            onChange={passWordHandler}
            placeholder="비밀번호를 입력해주세요."
            maxLength={15}
          />
        </InputBoxs>
        <ButtonBoxs>
          <LoginButton type="button" onClick={handleLoginInfoSubit}>
            로그인
          </LoginButton>
          <SignUpLink to="/signup">아직 회원이 아니신가요? </SignUpLink>
        </ButtonBoxs>
      </LoginInpustForm>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: black;
`;
const LoginInpustForm = styled.div`
  display: block;
  border-radius: 1px;
  height: 50vh;
  width: 40%;
  background-color: white;
`;
const Title = styled.p`
  font-weight: 1000;
  font-size: 3rem;
  margin: 50px 80px;
  white-space: nowrap;

  @media (max-width: 830px) {
    font-size: 1rem;
    margin: 50px 30px;
  }
`;

const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: auto; */
  gap: 50px;
  margin: 50px 80px;

  @media (max-width: 830px) {
    margin: 50px 30px;
  }
`;

const Inputs = styled.input`
  font-size: 20px;
  border: none;
  border-bottom: 1px grey solid;
  outline: none;

  @media (max-width: 830px) {
    font-size: 1rem;
  }
`;

const ButtonBoxs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  gap: 30px;
  border: none;
  background-color: transparent;

  @media (max-width: 830px) {
    margin: auto;
  }
`;

const LoginButton = styled.button`
  margin-top: 50px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: grey;
  font-weight: 800;
  white-space: nowrap;

  &:hover {
    color: #00b1ab;
  }
`;

const SignUpLink = styled(Link)`
  margin-top: 40px;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: lightgray;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: red;
  }

  @media (max-width: 830px) {
    font-size: 0.7rem;
  }
`;
