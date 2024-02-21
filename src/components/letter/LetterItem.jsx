import React, { useContext } from "react";
import Button from "../layout/Button";
import styled from "styled-components";
import { LetterContext } from "../../contextLetter/LetterContext";

export default function LetterItem({ letter }) {
  const { id, content, nickname, date } = letter;
  const { onDeleted, onEdit } = useContext(LetterContext);
  // const dateObject = new Date(date);

  const getdate = new Date(date).toLocaleString("ko-KR", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ItemBox>
      <Article>
        <ShowBox>
          <ShowNickName>{nickname}</ShowNickName>
          <ShowDate>{getdate}</ShowDate>
        </ShowBox>
        <ShowContentBox>
          <ShowContent>{content}</ShowContent>
        </ShowContentBox>
        <ButtonBox>
          <Button
            type="button"
            text="상세보기"
            line="underline"
            color="#00B1AB"
            onClick={() => onEdit(id)}
          />
          <Button
            type="button"
            text="삭제"
            onClick={() => onDeleted(id)}
            line="underline"
            color="#00B1AB"
          />
        </ButtonBox>
      </Article>
    </ItemBox>
  );
}

const ItemBox = styled.section`
  border: 2px solid whitesmoke;
  border-radius: 30px;
  margin-bottom: 5px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 80%;
`;

const ShowContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 10px;
  width: 100%;
`;

const ShowContent = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ButtonBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ShowBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: low;
  gap: 10px;
`;

const ShowNickName = styled.h1`
  font-size: 10px;
  text-decoration-line: underline;
  text-decoration-color: #00b1ab;
`;

const ShowDate = styled.h3`
  font-size: 8px;
  color: grey;
`;
