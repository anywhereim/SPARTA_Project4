import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCheck } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { UserInfoContext } from "../../contextLogin/UserInfoContext";

export default function Navbar({ detail, home, user }) {
  const { loginUser, setLoginUser } = useContext(UserInfoContext);
  const navigate = useNavigate;

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setLoginUser(null);
  };

  return (
    <Stnav>
      {loginUser.name ? (
        <button onClick={handleLogout}>
          <BsPersonCheck />
        </button>
      ) : (
        <Stlink to="/login">
          <IoMdPersonAdd />
        </Stlink>
      )}

      <Stlink to="detail">{detail}</Stlink>
      <Stlink to="/">{home}</Stlink>
    </Stnav>
  );
}

const Stnav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  color: white;
  text-decoration-line: underline;
  text-decoration-color: #00b1ab;
`;

const Stlink = styled(Link)`
  text-decoration: none;
  color: white;
`;
