import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./containers/Blog";
import DonateLocation from "./containers/DonateLocation";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/donate" component={DonateLocation} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
