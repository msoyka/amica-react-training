import React from "react";
import styled from "styled-components";
import icon from "./avatar.svg";

// 🎯 TO DO: Create a Higher-Order Component from SmartAvatar.jsx and implement it within this file.
// ✅ `export default Avatar;` will turn into `export default higherOrderComponent(Avatar);`
//
// 💰TIP: a higher-order component is a function that takes a component and returns a new component.
// 💰TIP: https://reactjs.org/docs/higher-order-components.html

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

const Avatar = ({ src = icon, alt = "Avatar Icon" }) => {
  function addDefaultSrc(ev) {
    ev.target.src = icon;
  }

  return (
    <Wrapper>
      <img src={src} alt={alt} onError={addDefaultSrc} />
    </Wrapper>
  );
};

export default Avatar;
