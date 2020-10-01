import React, { useState, useEffect, useContext } from "react";
import { getFlightInfo } from "../Api";
import { IdContext } from "./IdContext";
export default function ApiData(props) {
  const [quotesInfo, setQuotesInfo] = useState("");
  const [carrierInfo, setCarrierInfo] = useState("");
  const [currencyInfo, setCurrencyInfo] = useState("");
  const { departureId } = useContext(IdContext);
  const { destinationId } = useContext(IdContext);
  useEffect(() => {
    if (departureId && destinationId)
      getFlightInfo(departureId, destinationId)
        .then((res) => {
          console.log(res);
          setQuotesInfo(res.Quotes.map((airport) => airport));
          setCarrierInfo(res.Carriers.map((c) => c));
        })
        .catch((err) => {
          console.log(err);
        });
  }, [departureId, destinationId]);

  let quotesDataArr = Array.from(quotesInfo);
  let carrierDataArr = Array.from(carrierInfo);
  console.log("quotesDataArr", quotesDataArr);
  let quotesCarrierId = quotesDataArr.map((a) => {
    return a.OutboundLeg.CarrierIds;
  });

  return (
    <div>
      {/* {carrierDataArr.map((a) => {
        return <p>{a.Name}</p>;
      })} */}
      {quotesDataArr.map((d, key) => {
        console.log(d.OutboundLeg.CarrierIds[0]);
        const carrierData = carrierDataArr.find(
          (carrierC) => carrierC.CarrierId === d.OutboundLeg.CarrierIds[0]
          // (carrierC) => console.log(carrierC)
        );
        console.log(carrierData);
        return (
          <ol style={{ listStyle: "none", marginRight: "20vw" }}>
            {carrierData && <li>{carrierData.Name}</li>}
            <li key={key.QuoteId}>${d.MinPrice}</li>
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: "10vw",
                marginTop: "-3.5vh",
              }}
              key={key.QuoteId}
            >
              Departure Time:{d.QuoteDateTime.slice(11, 16)}
            </li>
          </ol>
        );
      })}
    </div>
  );
}
