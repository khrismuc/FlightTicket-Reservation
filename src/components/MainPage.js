import React, { useState, useEffect, useContext } from "react";
import { getFlightInfo } from "../Api";
import { IdContext } from "./IdContext";
import {
  CarrierAndPrice,
  MainPageBorder,
  RowFormat,
  NameAndTime,
  InfoTop,
  InfoBottom,
  SaveButtonDiv,
  SaveButtonBorder,
  SaveButton,
} from "./Styled";

export default function MainPage(props) {
  const [quotesInfo, setQuotesInfo] = useState("");
  const [carrierInfo, setCarrierInfo] = useState("");
  const { departureId } = useContext(IdContext);
  const { destinationId } = useContext(IdContext);
  const { destinationName, departureName } = useContext(IdContext);
  const { departureDate } = useContext(IdContext);

  useEffect(() => {
    if (departureId && destinationId)
      getFlightInfo(departureId, destinationId, departureDate)
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

  return (
    <div>
      {quotesDataArr.map((d, key) => {
        console.log(d.OutboundLeg.CarrierIds[0]);
        const carrierData = carrierDataArr.find(
          (carrierC) => carrierC.CarrierId === d.OutboundLeg.CarrierIds[0]
          // (carrierC) => console.log(carrierC)
        );
        console.log(carrierData);
        return (
          <>
            <MainPageBorder>
              {/* Card with info */}
              <RowFormat>
                <CarrierAndPrice>
                  {carrierData && (
                    <InfoTop key={key.QuoteId}>{carrierData.Name}</InfoTop>
                  )}
                  <InfoBottom key={key.QuoteId}>${d.MinPrice}</InfoBottom>
                </CarrierAndPrice>

                <NameAndTime>
                  <InfoTop key={key.QuoteId}>
                    {departureName}--{destinationName}
                  </InfoTop>
                  <InfoBottom key={key.QuoteId}>
                    Departure Time: {d.QuoteDateTime.slice(11, 16)}
                  </InfoBottom>
                </NameAndTime>
              </RowFormat>
            </MainPageBorder>

            {/* Save Button */}
            <SaveButtonDiv>
              <SaveButtonBorder>
                <SaveButton>save</SaveButton>
              </SaveButtonBorder>
            </SaveButtonDiv>
          </>
        );
      })}
    </div>
  );
}
