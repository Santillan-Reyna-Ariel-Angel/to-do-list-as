import styled from 'styled-components';

export const Background = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 3%;
  width: 100%;
  ////
  /* left: 0;
  top: 0;
  margin-top: 20px; */
`;

export const BodyContainer = styled.div`
  display: grid;
  background-color: #fff;
  grid-template-columns: 200px auto auto;
  grid-template-rows: auto;
  grid-row-gap: 0px;
  grid-column-gap: 10px;
  padding: 10px 20px;
  border: 4px solid #051e34;
  border-radius: 5px 5px 5px 5px;
  backdrop-filter: blur(18px);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  grid-template-areas: 'TaskNameStyle PriorityStyle ActionsStyle' 'CreatedStyle CreatedStyle CreatedStyle' 'CompletedStyle CompletedStyle CompletedStyle';

  /* @media screen and (max-width: 768px) {
    grid-template-columns: 120px auto;
    grid-row-gap: 10px;
    grid-column-gap: 5px;
    padding: 15px 15px 10px 15px;
  } */
`;

export const TaskNameStyle = styled.div`
  grid-area: TaskNameStyle;
  align-self: center;
  .extraStyles {
    margin: 0px;
    width: 100%;
  }
`;

export const PriorityStyle = styled.div`
  grid-area: PriorityStyle;
  align-self: center;
  .extraStyles {
    width: 100%;
  }
`;
//

export const ActionsStyle = styled.div`
  grid-area: ActionsStyle;
  align-self: center;
  .extraStyles {
    width: 100%;
  }
`;

export const CreatedStyle = styled.div`
  grid-area: CreatedStyle;
  .extraStyles {
    margin: 0px;
    width: 100%;
    font-style: italic;
    font-size: 12px;
  }
`;

export const CompletedStyle = styled.div`
  grid-area: CompletedStyle;
  .extraStyles {
    margin: 0px;
    width: 100%;
    font-style: italic;
    font-size: 12px;
  }
`;
