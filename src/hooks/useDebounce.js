import { useEffect, useRef } from "react";

// Custom Debounce Hook
export const useDebounce = (cbFunc, wait) => {
  const timeoutIdRef = useRef(null);

  const debouncedCallback = (...args) => {
    //clear any existing timeout before setting a new one
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      cbFunc(...args);
    }, wait);
  };

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};
