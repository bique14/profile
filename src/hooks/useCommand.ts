import { useEffect, useState } from "react";

const useCommand = (speed: number = 100) => {
  const cmd = "node profile.js";
  const [command, setCommand] = useState<string>("");
  const [isEnd, setIsEnd] = useState<boolean>(false);

  let i = 0;

  useEffect(() => {
    const typeWriter = () => {
      if (i === cmd.length) setIsEnd(true);
      if (i < cmd.length) {
        setCommand((prev) => prev.concat(cmd.charAt(i)));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    setTimeout(() => typeWriter(), 500);
  }, []);

  return { command, isEnd };
};

export default useCommand;
