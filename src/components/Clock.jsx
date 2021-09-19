import { useState } from "react";
import { useEffect } from "react";
import { toTime } from "../js/helpers";

const Clock = () => {
  const [time, setTime] = useState(Date());

  useEffect(() => {
    setInterval(() => {
      setTime(Date());
    }, 1000);
  }, []);

  return (
    <p
      disabled
      className="button is-outlined  is-link clock heading has-text-link is-size-4"
    >
      {toTime(time)}
    </p>
  );
};
export default Clock;
