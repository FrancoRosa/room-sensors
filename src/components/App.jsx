import { Switch, Redirect, Route } from 'react-router-dom';
import AddRoom from "./AddRoom";
import AddSensor from "./AddSensor";
import Navigator from "./Navigator";
import Rooms from "./Rooms";
import Room from "./Room";
import Sensor from "./Sensor";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="columns">
        <Navigator />
        <Switch>
            <Redirect exact from="/" to="/rooms" />
            <Route path="/rooms" component={Rooms} />
            <Route path="/room" component={Room} />
            <Route path="/sensor" component={Sensor} />
            <Route path="/add_room" component={AddRoom} />
            <Route path="/add_sensor" component={AddSensor} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
