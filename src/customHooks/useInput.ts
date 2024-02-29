import { ChangeEvent, useState } from "react";

export const useInput = (initialValue : string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickAlert = () => {
    alert(inputValue)
    setInputValue("");
  }

  return [inputValue, onChangeValue, onClickAlert]
}