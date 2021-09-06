import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import AllTrips from './AllTrips.js';
import TripDetails from './TripDetails.js';
import '../styles/app.css';

function App() {

  return (
    <div>
      <Header />
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={AllTrips} />
          <Route path="/:countryName" exact component={TripDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
