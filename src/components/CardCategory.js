import React from "react";

const CardCategory = (props) => {
  const { id, name, color } = { ...props };
  return (
    <div style={{ background: color }}>
      <div>{name}</div>
      <div>{color}</div>
    </div>
  );
};

export default CardCategory;
