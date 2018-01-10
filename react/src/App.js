import React, { Component } from "react";
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import QuestionIndex from './containers/QuestionIndex'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={QuestionIndex} />
        {/* <Route path="questions/:id" component={}/> */}
      </Route>
    </Router>
  )
}

export default App;
