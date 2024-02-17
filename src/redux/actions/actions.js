import * as types from "./actionTypes";

export const setLetter = (letters) => ({
  type: types.SET_LETTERS,
  payload: letters,
});

export const addLetter = (letter) => ({
  type: types.ADD_LETTERS,
  payload: letter,
});

export const editLetter = (id, newContent) => ({
  type: types.EDIT_LETTERS,
  payload: { id, newContent },
});

export const deleteLetter = (id) => ({
  type: types.DELETE_LETTERS,
  payload: id,
});

export const openLetter = () => ({
  type: types.OPEN_LETTERS,
});

export const closeLetter = () => ({
  type: types.CLOSE_LETTERS,
});
