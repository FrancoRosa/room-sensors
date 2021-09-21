import { faCog, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useHistory, useParams } from "react-router-dom";
import { deleteSensor, getMeasurements, getMeasurementsQuery } from "../js/api";
import { timeFromNow, toDate, toDateTime, toTime } from "../js/helpers";

const Sensor = () => {
  const [realtime, setRealtime] = useState(true);
  const [queryDate, setQueryDate] = useState(toDate(Date.now()));
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const { sensor_id, room_id } = useParams();
  const sensors = useStoreState((state) => state.sensors);
  const message = useStoreState((state) => state.message);
  const removeSensor = useStoreActions((actions) => actions.removeSensor);
  const sensor = sensors.filter((sensor) => sensor.id == sensor_id)[0];
  const measurements = useStoreState((state) => state.measurements);
  const setMeasurements = useStoreActions((actions) => actions.setMeasurements);
  const addMeasurement = useStoreActions((actions) => actions.addMeasurement);
  const shiftMeasurement = useStoreActions(
    (actions) => actions.shiftMeasurement
  );
  const [value, setValue] = useState(sensor.last_measurement);
  const history = useHistory();

  const initialData = (labels, data) => ({
    labels,
    datasets: [
      {
        label: "Temperature ॰C",
        data,
        fill: false,
        borderColor: "#2ecc71",
        tension: 0.1,
      },
    ],
  });

  const options = {
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMin: 10,
        suggestedMax: 45,
        ticks: {
          font: {
            size: 20,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 20,
          },
        },
      },
    },
  };

  useEffect(() => {
    if (sensors.length == 0) history.push("/");
  }, []);

  useEffect(() => {
    console.log("...measurements");
    getMeasurements(room_id, sensor_id).then((res) => {
      console.log(res.measurements);
      setMeasurements(res.measurements);
    });
  }, [sensor_id]);

  useEffect(() => {
    if (message.room_id == room_id && message.sensor_id == sensor_id) {
      setValue(message.value);
      if (realtime) {
        if (measurements.length > 300) shiftMeasurement();
        addMeasurement({
          ...message,
          id: Date.now(),
          updated_at: Date(message.updated_at),
        });
      }
    }
  }, [message]);

  useEffect(() => {
    setLabels(
      measurements.map((measurement) => toTime(measurement.updated_at))
    );
    setData(measurements.map((measurement) => measurement.value));
  }, [measurements]);

  const onSetRealtime = () => {
    getMeasurements(room_id, sensor_id).then((res) => {
      console.log(res.measurements);
      setMeasurements(res.measurements);
    });
    setRealtime(true);
  };

  const handleSensorDelete = () => {
    if (window.confirm("Delete sensor and all data?")) {
      deleteSensor(room_id, sensor_id).then((res) => {
        if (res.message) {
          history.push(`/room/${room_id}`);
          removeSensor(sensor_id);
        }
      });
    }
  };

  const handleQuery = (e) => {
    console.log("query date:", e.target.value);
    setQueryDate(e.target.value);
    setRealtime(false);
    getMeasurementsQuery(room_id, sensor_id, { date: e.target.value }).then(
      (res) => {
        console.log(res.measurements);
        setMeasurements(res.measurements);
      }
    );
  };

  return (
    <div className="column pt-4">
      {sensors.length != 0 ? (
        <>
          <div className="is-flex is-justify-content-space-between">
            <p>
              <span className="title is-3">{sensor.name}: </span>
              <span className="is-size-3 has-text-success ">{value}</span>
              <span className="is-size-4 has-text-success ">
                {" "}
                {sensor.unit}
              </span>
            </p>
            <p
              onClick={handleSensorDelete}
              className="has-text-danger title is-5"
            >
              <FontAwesomeIcon icon={faTrash} className="mt-4 mr-4" />
            </p>
          </div>
          <div className="card">
            <Line data={() => initialData(labels, data)} options={options} />
          </div>
          <div className="is-flex is-justify-content-space-between p-3">
            <button
              onClick={onSetRealtime}
              className={`is-medium button is-outlined ${
                realtime && "is-success"
              }`}
            >
              <FontAwesomeIcon icon={faCog} spin={realtime} className="mr-2" />
              Realtime
            </button>
            <div className="is-flex">
              <label class="label is-medium mr-2">Date:</label>
              <input
                onChange={handleQuery}
                value={queryDate}
                type="date"
                className={`is-medium input mr-3 ${!realtime && "is-success"}`}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sensor;
