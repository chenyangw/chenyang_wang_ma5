import React, { useState } from "react";

export default function Grid(props) {
  let { increment, decrement } = props;

  const [isActive, setIsActive] = useState(false); //false

  const handleClick = () => {
    setIsActive((current) => !current);
    isActive ? decrement() : increment();
  };

  return (
    <div>
      <div
        className={isActive ? "child active" : "child"}
        onClick={handleClick}
      ></div>
    </div>
  );
}
