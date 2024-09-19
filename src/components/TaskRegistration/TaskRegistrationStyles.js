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
  grid-template-columns: 150px 250px auto;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  grid-column-gap: 10px;
  padding: 15px 20px;
  border: 4px solid #051e34;
  border-radius: 10px 10px 10px 10px;
  backdrop-filter: blur(18px);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  grid-template-areas: 'PriorityStyle TaskStyle BtnStyle';
`;

export const PriorityStyle = styled.div`
  grid-area: PriorityStyle;
  .extraStyles {
    width: 100%;
  }
`;

export const TaskStyle = styled.div`
  grid-area: TaskStyle;
  .extraStyles {
    width: 100%;
  }
`;

export const BtnStyle = styled.div`
  grid-area: BtnStyle;
  align-self: center;
  .extraStyles {
    width: 100%;
  }
`;
