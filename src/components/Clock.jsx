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

  return <p className="heading has-text-link is-size-5">{toTime(time)}</p>;
};
export default Clock;
