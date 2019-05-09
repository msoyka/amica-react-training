import React from "react";
import styled from "styled-components";

import icon from "./avatar.svg";
import smartAvatar from "./SmartAvatar";

const Wrapper = styled.figure`
  display: inline-block;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(34, 204, 216, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(34, 204, 216, 1);
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
`;

const Avatar = ({ src = icon, alt = "Avatar Icon" }) => {
  function addDefaultSrc(ev) {
    ev.target.src = icon;
  }

  return (
    <Wrapper>
      <Image src={src} alt={alt} onError={addDefaultSrc} />
    </Wrapper>
  );
};

export default smartAvatar(Avatar);
