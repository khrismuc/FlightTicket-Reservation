import React, { useRef, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { destinationApi, departureApi } from "../Api";
import { IdContext } from "./IdContext";
import { useHistory } from "react-router-dom";
import { FrontPageMain, SearchFlightButton, FrontPageH2 } from "./Styled";

function FrontPage() {
  const [departureInput, setDepartureInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const { arrivalInfo, setArrivalInfo } = useContext(IdContext);
  const { destinationInfo, setDestinationInfo } = useContext(IdContext);
  const timeout = useRef(null);
  const { setDestinationId, setDepartureId } = useContext(IdContext);
  const { setDestinationName, setDepartureName } = useContext(IdContext);
  const history = useHistory();

  //convert input to placeID to send it to ApiData
  const convertDeparture = () => {
    return departureApi(departureInput)
      .then((res) => {
        setDepartureId(res.Places.map((airport) => airport.PlaceId));
        setArrivalInfo(res.Places.map((airport) => airport));
        setDepartureName(res.Places.map((airport) => airport.PlaceName));
        return res.Places.map((airport) => airport.PlaceName);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const convertDestination = () => {
    return destinationApi(destinationInput)
      .then((res) => {
        setDestinationId(res.Places.map((a) => a.PlaceId));
        setDestinationInfo(res.Places.map((airport) => airport));
        setDestinationName(res.Places.map((airport) => airport.PlaceName));
        return res.Places.map((airport) => airport.PlaceName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDepartureInput(value);
    }, 800);
  };

  const handleChange2 = (event) => {
    const value = event.target.value;
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDestinationInput(value);
    }, 800);
  };

  const handleSubmit = async (event) => {
    const departureName = await convertDeparture();
    console.log("handleSubmit");
    const destinationName = await convertDestination();
    console.log(departureName);
    console.log(destinationName);
    destinationName.length > 1 && departureName.length > 1
      ? history.push("/ErrorPage")
      : history.push("/Main");
  };

  let arrivalData = Array.from(arrivalInfo);
  let destinationData = Array.from(destinationInfo);
  return (
    <FrontPageMain>
      <div>
        <FrontPageH2>Where to Next?</FrontPageH2>
        <SearchBar onChange={handleChange} onChange2={handleChange2} />
        <SearchFlightButton onClick={handleSubmit}>
          Search Flights
        </SearchFlightButton>
      </div>
      {/* 
      <p>start:{arrivalData.map((d) => d.PlaceName)}</p>
      <p>destination:{destinationData.map((d) => d.PlaceName)}</p>
      <p>{departureId}</p>
      <p>{destinationId}</p> */}
    </FrontPageMain>
  );
}

export default FrontPage;
