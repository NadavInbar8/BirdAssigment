
import './App.scss';
import React from 'react';
import SearchParams from './Components/LandingPage/land';
/*import {BrowserRouter as Router,Switch, Route} from "react-router-dom";*/


function App() {


return(
  <div className="App">
      <header className="header">
        <h1>Pet Finder!</h1>
      </header>
      <div>
        <SearchParams />
      </div>

    </div>

  );
}

export default App;