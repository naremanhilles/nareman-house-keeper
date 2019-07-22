
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import PrivatePages from './PrivatePages';
import auth from './auth/auth';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Help from './Components/Help/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage/index';
import Login from './Components/Login/index';
import Signup from './Components/Signup/index';
import PageNotFound from './Components/PageNotFound/index';
import Later from './Components/ToBuildLater/index';

export default class App extends Component {
  state = {
    islogged: null,
    userInfo: null,
  };

  componentDidMount() {
    auth.authenticate(() => {
      if (auth.isAuthenticated) {
        const userInfo = auth.getUserInfo();
        this.setState({ userInfo, islogged: auth.isAuthenticated });
      } else {
        this.setState({ islogged: auth.isAuthenticated });
      }
    });
  }

  isLoggedOut = () => {
    auth.logout();
    this.setState({ islogged: false });
  };

  setUserInfo = (_userInfo, _islogged) => {
    const userInfo = auth.getUserInfo() || _userInfo;
    this.setState({ userInfo, islogged: auth.isAuthenticated });
  };

  render() {
    const { islogged } = this.state;
    return (
      <>
        {islogged === null ? (
          <Spinner animation="grow" variant="info" className="loading" />
        ) : (
            <Router>
              <div className="body-container">
                <Switch>
                  <Route exact path="/" component={LandingPage} />

                  <Route exact path="/service" component={Later} />
                  <Route exact path="/help" component={Help} />
                  <Route exact path="/questions" component={Later} />
                  <Route exact path="/chat" component={Later} />
                  <Route exact path="/call" component={Later} />

                  <Route
                    exact
                    path="/login"
                    setUserInfo={this.setUserInfo}
                    render={props => (
                      <Login {...props} setUserInfo={this.setUserInfo} />
                    )}
                  />
                  <Route
                    exact
                    path="/signup"
                    setUserInfo={this.setUserInfo}
                    render={props => (
                      <Signup {...props} setUserInfo={this.setUserInfo} />
                    )}
                  />
                  <Route path="/app" component={PrivatePages} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </Router>
          )}
      </>
    );
  }
}
























