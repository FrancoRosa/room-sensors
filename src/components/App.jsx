import { Switch, Redirect, Route, Router } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import AddRoom from "./AddRoom";
import AddSensor from "./AddSensor";
import Navigator from "./Navigator";
import Rooms from "./Rooms";
import Room from "./Room";
import Sensor from "./Sensor";
import model from "../js/model";
import Clock from "./Clock";
import WirelessConfig from "./WirelessConfig";
import SystemConfig from "./SystemConfig";

const store = createStore(model);

const App = () => {
  return (
    <div className="container is-widescreen">
      <div className="columns">
        <StoreProvider store={store}>
          <Clock />
          <Navigator />
          <Switch>
            <Redirect exact from="/" to="/rooms" />
            <Route path="/rooms" component={Rooms} />
            <Route path="/room/:room_id/sensor/:sensor_id" component={Sensor} />
            <Route path="/room/:room_id" component={Room} />
            <Route path="/add_room" component={AddRoom} />
            <Route path="/add_sensor/:room_id" component={AddSensor} />
            <Route path="/wireless" component={WirelessConfig} />
            <Route path="/system" component={SystemConfig} />
          </Switch>
        </StoreProvider>
      </div>
    </div>
  );
};

export default App;
