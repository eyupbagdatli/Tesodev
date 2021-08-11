
import React from 'react';
import Search from './components/Search';

import 'semantic-ui-css/semantic.min.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Result from './components/Result';

export default function App() {
  return (
    <Router>
      <div className="tc  ma0 pa4 min-vh-100">



        <Switch>
          <Route path="/details/:id" >
            <Result />
          </Route>

          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



