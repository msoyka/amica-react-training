import React from "react";

// ES5 Function
// function Avatar(props) {
//   const { src, alt } = props;
//   return (
//     <div>
//       <img src={src} alt={alt} />
//     </div>
//   );
// }

// ES6 Arrow Function
const Avatar = props => {
  const { src, alt } = props;
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
