
import { useCallback, useMemo, useState } from "react";

function Optimization() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const evenNumbers = useMemo(() => {
    return numbers.filter((number) => number % 2 === 0);
  }, [numbers]);

  const addNumber = useCallback(() => {
    setNumbers((previous) => [...previous, previous.length + 1]);
  }, []);

  return (
    <div>
      <h2>ყველა რიცხვი: {numbers.join(", ")}</h2>
      <h2>ლუწი რიცხვები: {evenNumbers.join(", ")}</h2>
      <button onClick={addNumber}>Add number</button>
    </div>
  );
}

export default Optimization;
