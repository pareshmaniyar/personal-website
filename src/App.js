import React from 'react';
import './App.css';
import Home from './pages/home';
import Blogs from './pages/blogs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
            <div className="header-container">
              <Link to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
        </header>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/blogs"><Blogs/></Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;