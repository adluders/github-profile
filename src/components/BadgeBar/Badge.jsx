import React from "react";

const Badge = ({ text, stat }) => {
  return (
    <div className="Badge">
      <p className="Badge__Info">{text}</p>
      <p className="Badge__Detail">{stat}</p>
    </div>
  );
};

export default Badge;
