import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((count) => count + 1);
  };
  const decrementCounter = () => {
    setCount((count) => count - 1);
    if (count < 1) {
      setCount(0);
    }
  };

  // Hooks

  return (
    <>
      <h1>Counter app</h1>
      <div>Count: {count}</div>

      <div>
        <button data-testid="increment-btn" onClick={() => incrementCounter()}>
          +
        </button>
        <button data-testid="decrement-btn" onClick={() => decrementCounter()}>
          -
        </button>
      </div>
    </>
  );
}
