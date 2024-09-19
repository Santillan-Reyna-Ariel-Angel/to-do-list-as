import styled from 'styled-components';

export const Background = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 3%;
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: grid;
  background-color: #fff;
  grid-template-columns: 150px 230px auto; //170px 170px;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  grid-column-gap: 10px;
  padding: 15px 20px;
  border: 4px solid #051e34;
  border-radius: 10px 10px 10px 10px; //en vista: 0px 0px 10px 10px; en <DialogEmpty/> : 0px 0px 0px 0px;
  backdrop-filter: blur(18px);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  grid-template-areas: 'PriorityStyle TitleStyle BtnStyle';

  @media screen and (max-width: 768px) {
    grid-template-columns: 120px 160px auto;
    grid-row-gap: 10px;
    grid-column-gap: 5px;
    padding: 15px 15px 10px 15px;
  }
`;

export const PriorityStyle = styled.div`
  grid-area: PriorityStyle;
  .input {
    width: 100%;
  }
`;

export const TitleStyle = styled.div`
  grid-area: TitleStyle;
  .input {
    width: 100%;
  }
`;

export const BtnStyle = styled.div`
  grid-area: BtnStyle;
  align-self: center;
  .input {
    width: 100%;
  }
`;
