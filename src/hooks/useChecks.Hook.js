import { useState } from "react";

export const useChecked = (initialState = {}) => {
  const [checked, setChecked] = useState(initialState);

  const handleClickCheckbox = ({ target }) => {
    setChecked({
      ...checked,
      [target.user]: !checked[target.user],
    });
  };

  return { checked, setChecked, handleClickCheckbox };
};
