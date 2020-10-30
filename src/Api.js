export function getFlightInfo(flightId1, flightId2, departureDate) {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${flightId1}/${flightId2}/${departureDate}?inboundpartialdate=`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "",
        "x-rapidapi-key": "",
      },
    }
  ).then((response) => response.json());
}
export function destinationApi(a) {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=${a}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "",
        "x-rapidapi-key": "",
      },
    }
  ).then((response) => response.json());
}
export function departureApi(b) {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=${b}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "",
        "x-rapidapi-key": "",
      },
    }
  ).then((response) => response.json());
}
