
import './App.scss';
import React from 'react';
import SearchParams from './Components/LandingPage/searchParams';
import Details from './Components/Details/details';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {


return(
  <div className="App">
        <Router>
      <header className="header">
        <Link to="/">
          <h1> Pet Finder!</h1>
        </Link>
      </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
    </div>

  );
}

export default App;