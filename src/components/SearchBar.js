import React, { useContext } from "react";
import { IdContext } from "./IdContext";
export default function SearchBar(props) {
  const { setDestinationDate, setDepartureDate } = useContext(IdContext);

  const handleDate2 = (event) => {
    setDestinationDate(event.target.value);
  };
  const handleDate = (event) => {
    setDepartureDate(event.target.value);
  };
  return (
    <div>
      <div>
        <form>
          <textarea
            className="textarea"
            rows="2"
            onChange={props.onChange}
            label="text"
            aria-label="enter your destination"
            placeholder="enter your destination"
          ></textarea>
          <textarea
            className="textarea"
            rows="2"
            onChange={props.onChange2}
            label="text"
            aria-label="enter your location"
            placeholder="enter your location"
          ></textarea>
          <label for="departureDate">Departure Date</label>
          <input type="date" name="departureDate" onChange={handleDate} />
          <label for="arrivalDate">Arrival Date</label>
          <input type="date" name="destinationDate" onChange={handleDate2} />
        </form>
      </div>
    </div>
  );
}
