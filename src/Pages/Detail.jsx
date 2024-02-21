import { useContext, useState } from "react";

import LetterList from "../components/letter/LetterList";
import styled from "styled-components";
import LetterEditModal from "../components/letter/LetterEditModal";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Button from "../components/layout/Button";
import { LetterContext } from "../contextLetter/LetterContext";

export default function Detail() {
  const { letters, setLetters, modal } = useContext(LetterContext);

  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleUpToDate = (e) => {
    e.preventDefault();
    setLetters(
      [...letters].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  const handleOutOfDate = (e) => {
    e.preventDefault();
    setLetters(
      [...letters].sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };

  const handlePersonChange = (e) => {
    e.preventDefault();
    setSelectedPerson(e.target.value);
  };

  return (
    <>
      <Header />
      <NavButtons>
        <Navbar detail="HOME🏠" />
      </NavButtons>
      <SelectOption onChange={handlePersonChange}>
        <option value="">전체보기</option>
        <option value="hwasa">화사</option>
        <option value="moon">문별</option>
        <option value="solar">솔라</option>
        <option value="wheEin">휘인</option>
      </SelectOption>
      <ButtonsBox>
        <Button text="최신 순" onClick={handleUpToDate} />
        <Button text="오래 된 순" onClick={handleOutOfDate} />
      </ButtonsBox>
      <LetterList personName={selectedPerson} />
      {modal && <LetterEditModal />}
    </>
  );
}

const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  margin-left: 60%;
  margin-bottom: -30px;
`;

const SelectOption = styled.select`
  display: flex;
  flex-direction: row;
  width: 100px;
  margin-left: 33%;
  margin-bottom: -25px;
  color: white;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  & option {
    background-color: black;
    color: whitesmoke;
  }
`;
