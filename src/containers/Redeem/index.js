import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RewardCatalog from './RewardCatalog';

const Redeem = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/toofasttosleep-20`} exact>
        <p>Too Fast to Sleep</p>
      </Route>
      <Route path={`${match.path}/koi-50`} exact>
        <p>KOI</p>
      </Route>
      <Route path={`${match.path}/`} exact>
        <RewardCatalog />
      </Route>
    </Switch>
  );
};

export default Redeem;
