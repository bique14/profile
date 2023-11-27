import { useCallback, useEffect, useRef, useState } from "react";

const useCommand = (speed: number = 100) => {
  const cmd = " node profile.js";
  const [command, setCommand] = useState<string>("");
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const iRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const typeWriter = useCallback(() => {
    if (iRef.current === cmd.length) setIsEnd(true);
    if (iRef.current < cmd.length) {
      setCommand((prev) => prev.concat(cmd.charAt(iRef.current)));
      iRef.current++;
      timeoutRef.current = setTimeout(() => typeWriter(), speed);
    }
  }, [cmd, speed]);

  useEffect(() => {
    iRef.current = 0;
    timeoutRef.current = setTimeout(() => typeWriter(), 500);
    return () => clearTimeout(timeoutRef.current as NodeJS.Timeout);
  }, [typeWriter]);

  return { command, isEnd };
};

export default useCommand;
