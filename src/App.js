import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Blog1 from "./containers/Blog/1";
import Blog2 from "./containers/Blog/2";
import DonateLocation from "./containers/DonateLocation";
import Redeem from "./containers/Redeem";
import Profile from "./containers/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/donate" component={DonateLocation} />
        <Route exact path="/blog/2" component={Blog2} />
        <Route exact path="/blog/1" component={Blog1} />
        <Route exact path="/blog" component={Blog1} />
        <Route exact path="/redeem" component={Redeem} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
