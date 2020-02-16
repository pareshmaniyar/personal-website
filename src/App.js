import React from 'react';
import './App.css';
import Home from './pages/home';
import Redux from './pages/redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/redux">
              <Redux/>
            </Route>
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;