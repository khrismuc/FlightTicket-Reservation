import React, { useState } from "react";
import "./App.css";
import ConvertPlaces from "./components/ConvertPlaces";
import ApiData from "./components/ApiData";
import { IdContext } from "./components/IdContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [departureId, setDepartureId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  return (
    <div className="App">
      <Router>
        <IdContext.Provider
          value={{
            departureId,
            setDepartureId,
            destinationId,
            setDestinationId,
          }}
        >
          <Switch>
            <Route exact path="/" component={ConvertPlaces} />
            <Route exact path="/Main" component={ApiData} />
          </Switch>
        </IdContext.Provider>
      </Router>
    </div>
  );
}

export default App;
