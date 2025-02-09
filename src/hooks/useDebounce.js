import { useState, useEffect } from "react";

/**
 * Custom debounce hook to delay function execution
 * @param {string} value - The input value
 * @param {number} delay - Delay in milliseconds (default: 500ms)
 * @returns {string} - Debounced value
 */
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
