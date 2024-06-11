import { useDispatch } from "react-redux";
import { useState } from "react";

import { setSelected } from "../redux/radioSelection/slice";

export const useRadioSelect = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value !== selectedOption) {
      setSelectedOption(value);
      dispatch(setSelected(value));
    }
  };

  const handleLabelClick: React.MouseEventHandler<HTMLLabelElement> = (
    event
  ) => {
    const target = event.target as HTMLInputElement;
    const selectedValue =
      target.previousSibling instanceof HTMLInputElement
        ? target.previousSibling.value
        : "";
    if (selectedValue !== selectedOption) {
      setSelectedOption(selectedValue);
      dispatch(setSelected(selectedValue));
    }
  };

  return { selectedOption, handleRadioChange, handleLabelClick };
};
