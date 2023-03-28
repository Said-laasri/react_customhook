import { useState, useEffect } from "react";

const useCounter = (forward) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!forward) {
        setCount(count + (forward ? 1 : -1));
      } else {
        setCount(count + (forward ? 1 : -1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return count;
};

export default useCounter;