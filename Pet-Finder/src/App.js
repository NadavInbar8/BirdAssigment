
import './App.scss';
import React from 'react';
import SearchParams from './Components/LandingPage/searchParams';
import Details from './Components/Details/details';
import { BroweserRouter as Router, Route } from 'react-router-dom';

function App() {


return(
  <div className="App">
      <header className="header">
        <h1>Pet Finder!</h1>
      </header>
      <div>
        <Router>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Router>

      </div>

    </div>

  );
}

export default App;