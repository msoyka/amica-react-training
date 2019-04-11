import React from "react";
import icon from "./avatar.svg";

// React.createElement()
// function Avatar({ src = icon, alt = "Avatar Icon" }) {
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("img", { src, alt }, null)
//   );
// }

// ES5 Function
// function Avatar({ src = icon, alt = "Avatar Icon" }) {
//   return (
//     <div>
//       <img src={src} alt={alt} />
//     </div>
//   );
// }

// ES6 Arrow Function
const Avatar = ({ src = icon, alt = "Avatar Icon" }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
