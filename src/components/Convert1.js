import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import ApiData from "./ApiData";
import { destinationApi, departureApi } from "../Api";
function ConvertPlaces() {
  const [departureInput, setDepartureInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [arrivalInfo, setArrivalInfo] = useState("");
  const [destinationInfo, setDestinationInfo] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const timeout = useRef(null);

  //convert input to placeID to send it to ApiData
  const convertDeparture = () => {
    departureApi(departureInput)
      .then((res) => {
        setArrivalInfo(res.Places.map((airport) => airport));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const convertDestination = () => {
    destinationApi(destinationInput)
      .then((res) => {
        setDestinationInfo(res.Places.map((a) => a));
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
    setSubmitStatus(true);
  };

  let arrivalData = Array.from(arrivalInfo);
  let destinationData = Array.from(destinationInfo);
  const arrivalId = arrivalData.map((d) => d.PlaceId);
  const destinationId = destinationData.map((m) => m.PlaceId);
  return (
    <div>
      <SearchBar onChange={handleChange} onChange2={handleChange2} />
      <button className="text-button" onClick={handleSubmit}>
        submit
      </button>
      <p>start:{arrivalData.map((d) => d.PlaceName)}</p>
      <p>destination:{destinationData.map((d) => d.PlaceName)}</p>
      <ApiData
        startPoint={arrivalId}
        destination={destinationId}
        submitStatus={submitStatus}
      />
    </div>
  );
}

export default ConvertPlaces;
