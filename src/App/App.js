import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from '../Header';
import Intro from '../Intro';
import Smart from '../Smart';
import Goals from '../Goals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Intro />}
            />
            <Route
              path="/smart"
              render={() => <Smart />}
            />
            <Route
              path="/save_goals"
              render={() => <Goals />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
