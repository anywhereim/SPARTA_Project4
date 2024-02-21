import React, { useContext } from "react";
import LetterForm from "../letter/LetterForm";
import LetterList from "../letter/LetterList";
import styled from "styled-components";
import LetterEditModal from "../letter/LetterEditModal";
import { LetterContext } from "../../contextLetter/LetterContext";

export default function LetterPerson({
  imgUrl,
  formText,
  personName,
  listText,
}) {
  const { letters, modal } = useContext(LetterContext);

  return (
    <MainForm>
      <LetterForm imgUrl={imgUrl} text={formText} personName={personName} />

      <LetterList text={listText} letters={letters} personName={personName} />
      {modal && <LetterEditModal />}
    </MainForm>
  );
}

const MainForm = styled.main`
  margin: 0;
`;
