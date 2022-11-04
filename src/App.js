import React, { useState } from "react";

import Grid from "./Grid";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div className="count">
          <h1>Count: {count}</h1>
        </div>
        <div className="container">
          <div className="grid1">
            <Grid increment={incrementCount} decrement={decrementCount} />
          </div>
          <div className="grid2">
            <Grid increment={incrementCount} decrement={decrementCount} />
          </div>
          <div className="grid3">
            <Grid increment={incrementCount} decrement={decrementCount} />
          </div>
          <div className="grid4">
            <Grid increment={incrementCount} decrement={decrementCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
