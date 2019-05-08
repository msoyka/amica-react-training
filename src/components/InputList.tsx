import React from "react";
import styled from "styled-components";
import Input from "./Input";

const InputList = ({ listItems, type }) => {
  const listTag = type === "ordered" ? "ol" : "ul";
  const StyledList = styled(listTag)`
    li:not(:last-child) {
      margin-bottom: 1rem;
    }
  `;

  return (
    <StyledList>
      {listItems.map((item, index) => (
        <li key={index}>
          <Input name={item.name} value={item.value} />
        </li>
      ))}
    </StyledList>
  );
};

export default InputList;
