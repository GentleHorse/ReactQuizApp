import { useState, useEffect } from "react";
import { Progress } from "@material-tailwind/react";

/**
 *
 * @param {int} timeout timer duration
 * @param {function} onTimeout function once timer expires, you need to use with useCallback
 * @param {string} color progress bar color
 * @returns Progress bar component
 *
 */

export default function QuestionTimer({ timeout, onTimeout, color }) {
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
      className="w-[60%] h-[0.5rem] rounded-[24px] mb-8 mx-auto"
      color={color}
      value={(remainingTime / timeout) * 100}
    />
  );
}
