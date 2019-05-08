import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

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

const Button = ({ children }: Props) => <Btn type="button">{children}</Btn>;

export default Button;
