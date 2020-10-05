import styled from "styled-components";

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
  height: 11.2vh;
  width: 20vw;
`;

export const SaveButton = styled.button`
  margin-top: 4vh;
  font-size: 3vw;
  height: 3.5vh;
  margin-left: 6vw;
`;
