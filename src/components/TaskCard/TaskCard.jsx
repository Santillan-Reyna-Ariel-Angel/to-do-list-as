import {
  Background,
  BodyContainer,
  TaskNameStyle,
  ActionsStyle,
  PriorityStyle,
  CreatedStyle,
  CompletedStyle,
} from './TaskCardStyles';
import { Chip, IconButton } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const TaskCard = () => {
  return (
    <>
      <Background>
        <BodyContainer>
          <TaskNameStyle>
            <p className="extraStyles">Task Name</p>
          </TaskNameStyle>

          <PriorityStyle>
            <Chip
              className="extraStyles"
              label="Priority"
              variant="filled"
              color="success"
              size="small"
            />
          </PriorityStyle>
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
            <p className="extraStyles">Created Date</p>
          </CreatedStyle>
          <CompletedStyle>
            <p className="extraStyles">Completed Date</p>
          </CompletedStyle>
        </BodyContainer>
      </Background>
    </>
  );
};
