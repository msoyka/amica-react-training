import * as React from "react";
import { useState } from "react";

export interface Props {
  name: string;
  value: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: number;
  maxlength?: number;
}

const Input: React.FC<Props> = ({
  name,
  value,
  disabled,
  readonly,
  size,
  maxlength
}) => {
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
