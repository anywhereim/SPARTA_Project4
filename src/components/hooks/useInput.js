import { useState } from "react";

export default function useInput() {
  const [inputValue, setInputValue] = useState("");

  const handInput = (e) => {
    setInputValue(e.target.value);
  };

  const InitialValue = () => {
    setInputValue("");
  };

  return [inputValue, handInput, InitialValue];
}
