import styled from 'styled-components';

export const Background = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: grid;
  background-color: #fff;
  grid-template-columns: 280px auto;
  grid-template-rows: auto;
  grid-row-gap: 2px;
  grid-column-gap: 0px;
  padding: 10px 20px;
  border: 4px solid #051e34;
  border-radius: 5px 5px 5px 5px;
  backdrop-filter: blur(18px);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  grid-template-areas: 'TaskNameStyle  ActionsStyle' 'CreatedStyle  ActionsStyle' 'CompletedStyle  ActionsStyle';
`;

export const TaskNameStyle = styled.div`
  grid-area: TaskNameStyle;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  .extraStyles {
    width: 100%;
    font-weight: bold;
    color: #051e34;
  }
`;

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
