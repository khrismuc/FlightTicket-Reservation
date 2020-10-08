import styled from "styled-components";
import FrontPageBackGround from "../assets/boat.png";

//Front page
export const FrontPageMain = styled.body`
  background-image: url(${FrontPageBackGround});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const FrontPageH2 = styled.h2`
  display: none;
  @media (min-width: 1024px) {
    color: white;
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-left: 18vw;
    margin-top: 15vh;
    font-size: 4vw;
    font-weight: 350;
  }
  @media (min-width: 1180px) {
    margin-top: 10vh;
  }
  @media (min-width: 2200px) {
    margin-top: 7vh;
  }
`;
export const SearchFlightButton = styled.button`
  position: absolute;
  margin-left: 43.2vw;
  margin-top: 40vh;
  background: #0a0f39;
  border-radius: 1vw;
  width: 38vw;
  height: 5vh;
  font-size: 5vw;
  color: white;
  border: none;
  @media (min-width: 425px) {
    font-size: 4vw;
  }
  @media (min-width: 768px) {
    font-size: 3vw;
    width: 30vw;
    margin-left: 51.5vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.1vw;
    width: 8vw;
    border-radius: 0.3vw;
    margin-left: 73.5vw;
    margin-top: 38vh;
  }
  @media (min-width: 1600px) {
    margin-top: 45vh;
  }
  @media (min-width: 1800px) {
    margin-top: 48vh;
  }
  @media (min-width: 2200px) {
    height: 7vh;
    font-size: 1vw;
    margin-top: 50vh;
  }
`;

//SearchBar
export const SearchBarBorder = styled.div`
  width: 64vw;
  height: 32vh;
  background: #0a0f39;
  position: absolute;
  margin-left: 17.5vw;
  margin-top: 7vh;
  border-radius: 1vw;
  @media (min-width: 1024px) {
    height: 12vh;
    margin-top: 25vh;
    border-radius: 0.3vw;
  }
  @media (min-width: 1600px) {
    margin-top: 30vh;
    height: 14vh;
  }
  @media (min-width: 1800px) {
    height: 16vh;
  }
  @media (min-width: 2200px) {
    height: 18vh;
    margin-top: 30vh;
  }
`;

export const SearchBarForm = styled.form`
  margin-top: 1vh;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin-left: -0.5vw;
  }
`;

export const TextArea = styled.textarea`
  height: 5vh;
  margin-left: 2vw;
  resize: none;
  width: 60vw;
  border-radius: 1vw;
  @media (min-width: 1024px) {
    width: 19vw;
    height: 4vh;
    font-size: 1.3vw;
    border-radius: 0.3vw;
    margin-top: 1vh;
  }
  @media (min-width: 1440px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1800px) {
    height: 5vh;
  }
  @media (min-width: 2200px) {
    height: 6vh;
  }
`;

export const TextAreaLabel = styled.label`
  color: white;
  font-size: 5vw;
  margin-left: 2vw;

  @media (min-width: 425px) {
    font-size: 3vw;
  }
  @media (min-width: 768px) {
    font-size: 2vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.3vw;
  }
`;

export const DateInput = styled.input.attrs({
  type: "date",
})`
  height: 5vh;
  margin-left: 2vw;
  resize: none;
  width: 60vw;
  border-radius: 1vw;
  border: none;
  @media (min-width: 1024px) {
    width: 19vw;
    height: 4vh;
    font-size: 1.3vw;
    border-radius: 0.3vw;
    margin-top: 1vh;
  }
  @media (min-width: 1440px) {
    font-size: 1.1vw;
  }
  @media (min-width: 1800px) {
    height: 5vh;
  }
  @media (min-width: 2200px) {
    height: 6vh;
  }
`;

export const DateLabel = styled.label`
  color: white;
  font-size: 5vw;
  margin-left: 2vw;

  @media (min-width: 425px) {
    font-size: 3vw;
  }
  @media (min-width: 768px) {
    font-size: 2vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.3vw;
  }
`;

export const AreaAndLabel = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

//main page
export const MainPageBorder = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2vw;
  font-size: 3vw;
  margin-bottom: 3vw;
  width: 80v;
`;

export const RowFormat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarrierAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
`;

export const NameAndTime = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 22vw;
`;

export const InfoTop = styled.p`
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export const InfoBottom = styled.p`
  margin-bottom: 2vh;
`;

export const SaveButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SaveButtonBorder = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2vw;
  margin-top: -20vw;
  height: 10vh;
  width: 20vw;
`;

export const SaveButton = styled.button`
  margin-top: 4vh;
  font-size: 3vw;
  height: 3.5vh;
  margin-left: 6vw;
`;
