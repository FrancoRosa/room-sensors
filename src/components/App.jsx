import { Switch, Redirect, Route } from 'react-router-dom';
import AddRoom from "./AddRoom";
import Navigator from "./Navigator";
import Rooms from "./Rooms";

const App = () => {
  return (
    <div className="columns">
      <Navigator />
      <Switch>
          <Redirect exact from="/" to="/rooms" />
          <Route path="/rooms" component={Rooms} />
          <Route path="/add_room" component={AddRoom} />
      </Switch>
    </div>
  );
}

export default App;
