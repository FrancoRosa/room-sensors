import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { toTime } from "../js/helpers";

const Clock = () => {
  const [time, setTime] = useState(Date());
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setTime(Date());
    }, 1000);
    setConnected(navigator.onLine);
    window.addEventListener("online", () => setConnected(true));
    window.addEventListener("offline", () => setConnected(false));
  }, []);

  return (
    <p
      disabled
      className="button is-outlined clock heading has-text-white is-size-4 is-flex p-2"
    >
      <span>{toTime(time)}</span>
      <FontAwesomeIcon
        icon={faWifi}
        size="xs"
        className={`ml-1 ${connected ? "has-text-success" : "has-text-danger"}`}
      />
    </p>
  );
};
export default Clock;
