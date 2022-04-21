import { useState, useEffect, useRef } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const refId = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => percent + 2);
    }, 50);
    refId.current = interval;

    return () => clearInterval(refId.current as NodeJS.Timeout);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      clearInterval(refId.current as NodeJS.Timeout);
      setTimeout(() => setIsLoading(false), 1500);
    }
  }, [percent]);

  return { percent, isLoading };
};

export default useLoading;
