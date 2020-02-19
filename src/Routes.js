import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;