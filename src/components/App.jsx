import { Switch, Redirect, Route } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy';
import AddRoom from "./AddRoom";
import AddSensor from "./AddSensor";
import Navigator from "./Navigator";
import Rooms from "./Rooms";
import Room from "./Room";
import Sensor from "./Sensor";
import model from '../js/model'

const store = createStore(model)

const App = () => {
  return (
    <div className="container mt-4">
      <div className="columns">
        <StoreProvider store={store}>
          <Navigator />
          <Switch>
              <Redirect exact from="/" to="/rooms" />
              <Route path="/rooms" component={Rooms} />
              <Route path="/room/:id" component={Room} />
              <Route path="/sensor" component={Sensor} />
              <Route path="/add_room" component={AddRoom} />
              <Route path="/add_sensor" component={AddSensor} />
          </Switch>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
