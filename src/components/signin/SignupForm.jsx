import React, { useContext } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import {
  LoginContext,
  UserInfoContext,
} from "../../contextLogin/UserInfoContext";
import Button from "../layout/Button";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
  const { onAddSignup } = useContext(UserInfoContext);

  const [id, nameHandler, nameInitialValue] = useInput("");
  const [password, passWordHandler, passsWordInitialValue] = useInput("");
  const [nickname, nickNameHandler, nickNameInitialValue] = useInput("");

  const navigate = useNavigate();

  const handleLoginInfoSubit = (e) => {
    e.preventDefault();

    if (!password || !nickname) {
      alert("빈칸을 모두 입력해주세요😖");
      return;
    }

    onAddSignup({
      id,
      password,
      nickname,
    });

    nameInitialValue();
    passsWordInitialValue();
    nickNameInitialValue();
    navigate("/login");
  };

  const handleCheckDuplicate = () => {};

  return (
    <LoginBox>
      <LoginForm onSubmit={handleLoginInfoSubit}>
        <Title>회원가입</Title>
        <InputBoxs>
          <GetId>
            <Inputs
              type="text"
              value={id}
              onChange={nameHandler}
              placeholder="아이디 (4~10글자)"
              maxLength={10}
              minLength={4}
            />
            <CheckDuplicateButton onClick={handleCheckDuplicate}>
              중복확인
            </CheckDuplicateButton>
          </GetId>
          <Inputs
            type="password"
            value={password}
            onChange={passWordHandler}
            placeholder="비밀번호 (4~15글자)"
            maxLength={15}
            minLength={4}
          />
          <Inputs
            type="text"
            value={nickname}
            onChange={nickNameHandler}
            placeholder="닉네임 (1~10글자)"
            maxLength={10}
          />
        </InputBoxs>
        <Submits>
          <LoginButton>회원가입</LoginButton>
          <SignUpLink to="/login">로그인</SignUpLink>
        </Submits>
        <Link to="/">닫기</Link>
      </LoginForm>
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
const LoginForm = styled.form`
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
  margin: auto;
  gap: 50px;
  margin: 50px 80px;
  white-space: nowrap;

  @media (max-width: 830px) {
    font-size: 1rem;
    margin: 50px 30px;
  }
`;

const GetId = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Inputs = styled.input`
  font-size: 20px;
  border: none;
  border-bottom: 1px grey solid;
  outline: none;
  width: 100%;

  @media (max-width: 830px) {
    font-size: 1rem;
  }
`;

const CheckDuplicateButton = styled.button`
  position: absolute;
  left: 80%;
  bottom: 20%;
  background-color: lightgrey;
  color: white;
  border: none;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  white-space: nowrap;

  &:hover {
    background-color: #00b1ab;
  }

  @media (max-width: 830px) {
    font-size: 0.6rem;
    width: 60px;
    height: 20px;
    left: 70%;
  }
`;

const Submits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  gap: 30px;

  border: none;
  background-color: transparent;
  white-space: nowrap;
`;

const LoginButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: grey;
  font-weight: 800;

  &:hover {
    color: #00b1ab;
  }

  @media (max-width: 830px) {
    font-size: 0.8rem;
  }
`;

const SignUpLink = styled(Link)`
  font-size: 20px;
  border: none;

  background-color: transparent;
  cursor: pointer;
  color: grey;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: #00b1ab;
  }

  @media (max-width: 830px) {
    font-size: 0.8rem;
  }
`;
