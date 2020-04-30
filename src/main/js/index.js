'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {client} from './client'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'


window.client = client   // To be accessible from browser and debug requests


class Index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about" exact={true} component={About}/>
          <Route path="/users/create" exact={true} component={User}/>
          <Route path="/users/:id" component={User}/>
        </Switch>
      </Router>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('react')
)