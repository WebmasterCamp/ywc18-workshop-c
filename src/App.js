import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import DonateLocation from "./containers/DonateLocation";
import Redeem from "./containers/Redeem";
import Profile from "./containers/Profile";
import TooFast20 from "./containers/Redeem/Reward/TooFast20";
import Koi50 from "./containers/Redeem/Reward/Koi50";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/donate" component={DonateLocation} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/redeem/toofasttosleep20" component={TooFast20} exact/>
        <Route exact path="/redeem/koi50" component={Koi50} exact/>
        <Route exact path="/redeem" component={Redeem}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
