import React, { useState } from "react";

const Input = ({ name, value, disabled, readonly, size, maxlength }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <input
      type="text"
      onChange={e => setInputValue(e.target.value)}
      name={name}
      value={inputValue}
      disabled={disabled}
      readOnly={readonly}
      size={size}
      maxLength={maxlength}
    />
  );
};
export default Input;
