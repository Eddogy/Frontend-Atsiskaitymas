import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import SavedDomains from './containers/SavedDomains/SavedDomains';
import About from './containers/About/About'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/saveddomains' component={SavedDomains} exact/>
        <Route path='/about' component={About} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
