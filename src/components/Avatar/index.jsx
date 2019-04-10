import React from "react";
import styled from "styled-components";
import icon from "./avatar.svg";

const Wrapper = styled.figure`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(34, 204, 216, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(34, 204, 216, 1);
    transform: scale(1.1);
  }
`;

// ES5 Function
// function Avatar({ src = icon, alt = "Avatar Icon" }) {
//   return (
//     <Wrapper>
//       <img src={src} alt={alt} />
//     </Wrapper>
//   );
// }

// ES6 Arrow Function
const Avatar = ({ src = icon, alt = "Avatar Icon" }) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};

export default Avatar;
