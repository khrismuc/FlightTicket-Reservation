import React, { useRef, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { destinationApi, departureApi } from "../Api";
import { IdContext } from "./IdContext";
import { Link } from "react-router-dom";

function FrontPage() {
  const [departureInput, setDepartureInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [arrivalInfo, setArrivalInfo] = useState("");
  const [destinationInfo, setDestinationInfo] = useState("");
  const timeout = useRef(null);
  const { departureId, setDepartureId } = useContext(IdContext);
  const { destinationId, setDestinationId } = useContext(IdContext);
  const { setDestinationName, setDepartureName } = useContext(IdContext);

  //convert input to placeID to send it to ApiData
  const convertDeparture = () => {
    departureApi("Seoul Incheon")
      .then((res) => {
        setDepartureId(res.Places.map((airport) => airport.PlaceId));
        setArrivalInfo(res.Places.map((airport) => airport));
        setDepartureName(res.Places.map((airport) => airport.PlaceName));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const convertDestination = () => {
    destinationApi("Tokyo Narita")
      .then((res) => {
        setDestinationId(res.Places.map((a) => a.PlaceId));
        setDestinationInfo(res.Places.map((airport) => airport));
        setDestinationName(res.Places.map((airport) => airport.PlaceName));
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setDestinationInput("");
    setDepartureInput("");
    convertDeparture();
    convertDestination();
  };

  let arrivalData = Array.from(arrivalInfo);
  let destinationData = Array.from(destinationInfo);
  return (
    <div>
      <SearchBar onChange={handleChange} onChange2={handleChange2} />
      <button className="text-button" onClick={handleSubmit}>
        <Link to={"/Main"}> submit</Link>
      </button>

      <p>start:{arrivalData.map((d) => d.PlaceName)}</p>
      <p>destination:{destinationData.map((d) => d.PlaceName)}</p>
      <p>{departureId}</p>
      <p>{destinationId}</p>
    </div>
  );
}

export default FrontPage;
