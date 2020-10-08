import React, { useContext } from "react";
import { IdContext } from "./IdContext";
import { useHistory } from "react-router-dom";

export default function ErrorPage() {
  const { arrivalInfo, destinationInfo } = useContext(IdContext);
  const { setArrivalId, setDestinationId } = useContext(IdContext);
  let arrivalData = Array.from(arrivalInfo);
  let destinationData = Array.from(destinationInfo);
  const history = useHistory();
  let count = 0;
  let count2 = 0;
  return (
    <div>
      {arrivalData.map((d) => {
        let id = d.PlaceId;
        const handleClick = () => {
          setArrivalId(id);
          count += 1;
          if (count2 === 1 && count === 1) {
            history.push("/Main");
          }
        };
        return <button onClick={handleClick}>{d.PlaceName}</button>;
      })}
      {destinationData.map((d) => {
        let id = d.PlaceId;
        const handleClick2 = () => {
          setDestinationId(id);
          count2 += 1;
          if (count2 === 1 && count === 1) {
            history.push("/Main");
          }
        };
        return <button onClick={handleClick2}>{d.PlaceName}</button>;
      })}
    </div>
  );
}
