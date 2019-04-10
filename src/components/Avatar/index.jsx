import React from "react";
// import styled from "styled-components";
import icon from "./avatar.svg";

// To Do
// 🎯 Use styled-components to styled Avatar component

const Avatar = ({ src = icon, alt = "Avatar Icon" }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  );
};

export default Avatar;
