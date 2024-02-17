import React, { useContext } from "react";
import LetterForm from "../letter/LetterForm";
import LetterList from "../letter/LetterList";
import styled from "styled-components";
import LetterEditModal from "../letter/LetterEditModal";
import { LetterContext } from "../../context/LetterContext";

export default function LetterPerson({
  imgUrl,
  formText,
  personName,
  listText,
}) {
  const {
    letters,
    setLetters,
    edit,
    modal,
    onDeleted,
    onEdit,
    onSubmit,
    onClose,
    onAddLetter,
  } = useContext(LetterContext);

  return (
    <MainForm>
      <LetterForm
        // onAddLetter={onAddLetter}
        imgUrl={imgUrl}
        text={formText}
        personName={personName}
      />

      <LetterList
        text={listText}
        letters={letters}
        personName={personName}
        onDeleted={onDeleted}
        onEdit={onEdit}
      />
      {modal && (
        <LetterEditModal
          letter={letters}
          edit={edit}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </MainForm>
  );
}

const MainForm = styled.main`
  margin: 0;
`;
