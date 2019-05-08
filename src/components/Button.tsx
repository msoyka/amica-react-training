import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 8px 12px;
  font-size: 0.8125rem;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: #3f51b5;
  color: #ffffff;
  font-weight: 600;

  &:hover {
    background-color: #2c3a87;
    cursor: pointer;
  }
`;

const Button = ({ children }) => <Btn type="button">{children}</Btn>;

export default Button;