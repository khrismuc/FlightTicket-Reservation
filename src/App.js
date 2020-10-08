import React, { useState } from "react";
import FrontPage from "./components/FrontPage";
import MainPage from "./components/MainPage";
import { IdContext } from "./components/IdContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [departureId, setDepartureId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [departureName, setDepartureName] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalInfo, setArrivalInfo] = useState("");
  const [destinationInfo, setDestinationInfo] = useState("");
  return (
    <div>
      <Router>
        <IdContext.Provider
          value={{
            departureId,
            setDepartureId,
            destinationId,
            setDestinationId,
            departureName,
            setDepartureName,
            destinationName,
            setDestinationName,
            departureDate,
            setDepartureDate,
            arrivalInfo,
            setArrivalInfo,
            destinationInfo,
            setDestinationInfo,
          }}
        >
          <NavBar />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/Main" component={MainPage} />
            <Route exact path="/ErrorPage" component={ErrorPage} />
          </Switch>
        </IdContext.Provider>
      </Router>
    </div>
  );
}

export default App;
