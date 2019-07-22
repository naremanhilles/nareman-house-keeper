import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "../Profilee/index";
import SideNav from '../SideNav'

export default class Mobile extends Component {
  state = {
    level: "",
    courseId: null
  };

  render() {
    return (
      <>
        <SideNav
          history={this.props.history}
          title='Home'
        />
        <Switch>
          <Route
            exact
            path={"/app/home"}
            component={() => <Profile
              history={this.props.history}
            />}
          />
          <Route component={() => <Profile
            history={this.props.history}
          />} />
        </Switch>
      </>
    );
  }
}
