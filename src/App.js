import React, { useState } from "react";

function RandomNumber() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    setNumber(randomNumber);
  };

  return (
    <div>
      <p>Random number: {number}</p>
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
}

export default RandomNumber;
