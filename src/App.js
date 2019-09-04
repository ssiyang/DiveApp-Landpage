import React from 'react';

import Home from './home';
import Feature1 from './feature1/index'
import Feature2 from './feature2/index'
import Feature3 from './feature3/index'
import Feature4 from './feature4/index'

import NavBar from './navbar/index'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/feature1' component={Feature1}></Route>
            <Route exact path='/feature2' component={Feature2}></Route>
            <Route exact path='/feature3' component={Feature3}></Route>
            <Route exact path='/feature4' component={Feature4}></Route>
          </Switch>
        </div>
      </Router>

    );
  }
}
