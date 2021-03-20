import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // avoids code repetation and also sets an initial value
  //useState is destructured in line 5
  function increase() {
    setCount(count + 1); //setCount value will be changed and then displayed to count
  } //setCount avoids repeatation
  function decrease() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

//increase fn will be called
