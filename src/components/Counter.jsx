import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

      useEffect(() => {
        console.log("გვერდი ჩაიტვირთა!");
    }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default Counter;