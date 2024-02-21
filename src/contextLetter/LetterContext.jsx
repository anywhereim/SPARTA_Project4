import { createContext, useEffect, useState } from "react";
import {
  createLetter,
  deleteLetter,
  readLetters,
  updateLetter,
} from "../api/axiosInstance";

export const LetterContext = createContext();

const LetterProvider = ({ children }) => {
  const [letters, setLetters] = useState([]);
  const [edit, setEdit] = useState(null);
  const [modal, setModal] = useState(false);

  const fetchLettersData = async () => {
    try {
      const response = await readLetters();
      setLetters(response);
    } catch (error) {
      console.error("데이터 가져오기 실패");
    }
  };

  useEffect(() => {
    fetchLettersData();
  }, []);

  const onDeleted = async (id) => {
    try {
      await deleteLetter(id);
      setLetters((prevLetters) =>
        prevLetters.filter((letter) => letter.id !== id)
      );
    } catch (error) {
      console.error("Deleting letter failed", error);
    }
  };

  const onEdit = (id) => {
    const findLetter = letters.find((letter) => letter.id === id);
    setEdit(findLetter);
    setModal(true);
  };

  const onSubmit = async (nextLetter) => {
    try {
      const updatedLetter = await updateLetter(nextLetter.id, nextLetter);
      setLetters((prevLetters) =>
        prevLetters.map((letter) => {
          if (nextLetter.id === letter.id) {
            return updatedLetter;
          }
          return letter;
        })
      );
    } catch (error) {
      console.error("Patch letter faild");
    }
  };

  const onClose = () => {
    console.log("취소");
    setModal(false);
  };

  const getLetterInfo = async (newLetterData) => {
    try {
      const newLetter = await createLetter(newLetterData);
      setLetters((prevLetters) => [newLetter, ...prevLetters]);
    } catch (error) {
      console.error("newLetter 추가 실패");
    }
  };

  return (
    <LetterContext.Provider
      value={{
        letters,
        setLetters,
        edit,
        setEdit,
        modal,
        setModal,
        onDeleted,
        onEdit,
        onSubmit,
        onClose,
        getLetterInfo,
        fetchLettersData,
      }}
    >
      {children}
    </LetterContext.Provider>
  );
};

export default LetterProvider;
