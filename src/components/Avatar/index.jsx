import React from "react";
import icon from "./avatar.svg";

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
