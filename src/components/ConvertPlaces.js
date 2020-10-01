import React, { useRef, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import ApiData from "./ApiData";
import { destinationApi, departureApi } from "../Api";
import { IdContext } from "./IdContext";
import From from "./From";
import To from "./To";
import { Link } from "react-router-dom";

function ConvertPlaces() {
  const [departureInput, setDepartureInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [arrivalInfo, setArrivalInfo] = useState("");
  const [destinationInfo, setDestinationInfo] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const departureRef = useRef(null);
  const destinationRef = useRef(null);

  const { departureId, setDepartureId } = useContext(IdContext);
  const { destinationId, setDestinationId } = useContext(IdContext);
  //convert input to placeID to send it to ApiData
  const convertDeparture = () => {
    departureApi(departureInput)
      .then((res) => {
        setDepartureId(res.Places.map((airport) => airport.PlaceId));
        setArrivalInfo(res.Places.map((airport) => airport));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const convertDestination = () => {
    destinationApi(destinationInput)
      .then((res) => {
        setDestinationId(res.Places.map((a) => a.PlaceId));
        setDestinationInfo(res.Places.map((airport) => airport));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDestinationInput(destinationRef.current.value);
    setDepartureInput(departureRef.current.value);
    convertDeparture();
    convertDestination();
    setSubmitStatus(true);
  };

  let arrivalData = Array.from(arrivalInfo);
  let destinationData = Array.from(destinationInfo);
  return (
    <div>
      <From ref={departureRef} />
      <To ref={destinationRef} />
      {/* <SearchBar ref={departureRef} ref2={destinationRef} /> */}
      <Link to={"/Main"}>
        <button>d</button>
      </Link>
      <button className="text-button" onClick={handleSubmit}>
        submit
      </button>

      <p>start:{arrivalData.map((d) => d.PlaceName)}</p>
      <p>destination:{destinationData.map((d) => d.PlaceName)}</p>
      <p>{departureId}</p>
      <p>{destinationId}</p>
    </div>
  );
}

export default ConvertPlaces;
