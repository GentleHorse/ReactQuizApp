import { useState, useEffect } from "react";
import { Progress } from "@material-tailwind/react";

/**
 *
 * @param timeout timer duration
 * @param onTimeout function once timer expires, you need to use with useCallback
 * @returns Progress bar component
 *
 */

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Progress
      id="question"
      className="w-[80%] h-[1rem] rounded-[24px] mb-8 mx-auto"
      color="purple"
      value={(remainingTime / timeout) * 100}
    />
  );
}
