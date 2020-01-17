import React from 'react';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
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
            <Route exact path="/"><Login/></Route>
            <Route exact path="/dashboard"><Dashboard/></Route>
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;