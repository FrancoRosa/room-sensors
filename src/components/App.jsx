import { Switch, Redirect, Route } from 'react-router-dom';
import AddRoom from "./AddRoom";
import Navigator from "./Navigator";
import Rooms from "./Rooms";
import Room from "./Room";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="columns">
        <Navigator />
        <Switch>
            <Redirect exact from="/" to="/rooms" />
            <Route path="/rooms" component={Rooms} />
            <Route path="/room" component={Room} />
            <Route path="/add_room" component={AddRoom} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
