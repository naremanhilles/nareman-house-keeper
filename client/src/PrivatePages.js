import React from 'react';
import { Switch } from 'react-router-dom';
import Home from './Components/Home/index';
import Book from './Components/Book/index';
import Day from './Components/Day/index';
import Hour from './Components/Hour/index';
import Confirm from './Components/Confirm/index';
import PageNotFound from './Components/PageNotFound/index';
import Later from './Components/ToBuildLater/index';
import PrivateRoute from './auth/PrivateRoute';

function PrivatePages() {
  return (
    <>
      <Switch>

        {/* <Route exact path="/privacy" component={Later} /> */}
        <PrivateRoute exact path="/app/book" component={Book} />
        <PrivateRoute
          exact
          path="/app/home"
          component={Home}
        />
        <PrivateRoute
          exact
          path="/app/history"
          component={Later}
        />
        <PrivateRoute
          exact
          path="/app/mybook"
          component={Later}
        />
        <PrivateRoute exact path="/app/day" component={Day} />
        <PrivateRoute exact path="/app/hour" component={Hour} />
        <PrivateRoute exact path="/app/confirm" component={Confirm} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </>
  );
}

export default PrivatePages;





