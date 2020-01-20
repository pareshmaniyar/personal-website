import React from 'react';
import './App.css';
import Home from './pages/home';
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
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;