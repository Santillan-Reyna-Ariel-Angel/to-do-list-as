import {
  Background,
  BodyContainer,
  TaskNameStyle,
  ActionsStyle,
  CreatedStyle,
  CompletedStyle,
} from './TaskCardStyles';
import { Chip, IconButton } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const TaskCard = () => {
  let date = '19/09/2024 9:30';
  return (
    <>
      <Background>
        <BodyContainer>
          <TaskNameStyle>
            <>
              <Chip
                label="Priority"
                variant="filled"
                color="success"
                size="small"
                sx={{
                  marginRight: '5px',
                }}
              />
              <span className="extraStyles">Task Name</span>
            </>
          </TaskNameStyle>

          <ActionsStyle>
            <div className="extraStyles">
              <IconButton color="error" onClick={() => {}}>
                <DeleteForeverRoundedIcon />
              </IconButton>
              <IconButton color="success" onClick={() => {}}>
                <CheckRoundedIcon />
              </IconButton>
            </div>
          </ActionsStyle>
          <CreatedStyle>
            <p className="extraStyles">{`Creado: ${date}`}</p>
          </CreatedStyle>
          <CompletedStyle>
            <p className="extraStyles">{`Completado: ${date}`}</p>
          </CompletedStyle>
        </BodyContainer>
      </Background>
    </>
  );
};
