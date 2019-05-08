import React from "react";
import styled from "styled-components";
import Input, { Props as InputProps } from "./Input";

interface Props {
  listItems: InputProps[];
  type: string;
}

enum ListType {
  ORDERED = "ordered",
  UNORDERED = "unordered"
}

const InputList: React.FC<Props> = ({ listItems, type }) => {
  const listTag = type === ListType.ORDERED ? "ol" : "ul";
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
