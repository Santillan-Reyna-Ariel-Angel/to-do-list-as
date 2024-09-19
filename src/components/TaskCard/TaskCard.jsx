import PropTypes from 'prop-types';
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
import { ContextAllTask } from '../../context/ContextAllTask';
import { useContext } from 'react';
import { getCurrentDateFormatted } from '../../utils/globalFunctions';

export const TaskCard = ({ tasks = [] }) => {
  const { globalTaskList, setGlobalTaskList } = useContext(ContextAllTask);

  const handleTaskState = (taskItem) => {
    let newGlobalTaskList = globalTaskList.map((task) => {
      if (task.id === taskItem.id) {
        return {
          ...taskItem,
          status: 'completado',
          completionDate: getCurrentDateFormatted(),
        };
      } else {
        return task;
      }
    });

    setGlobalTaskList(newGlobalTaskList);
  };

  const handleTaskDelete = (taskItem) => {
    let newGlobalTaskList = globalTaskList.filter(
      (task) => task.id !== taskItem.id
    );
    setGlobalTaskList(newGlobalTaskList);
  };

  return (
    <>
      {tasks.map((task) => (
        <Background key={task?.id}>
          <BodyContainer>
            <TaskNameStyle>
              <>
                <Chip
                  label={task?.priority}
                  variant="filled"
                  color={
                    task?.priority === 'Alta'
                      ? 'error'
                      : task?.priority === 'Media'
                      ? 'warning'
                      : 'success'
                  }
                  size="small"
                  sx={{
                    marginRight: '5px',
                  }}
                />
                <span className="extraStyles">{task?.name}</span>
              </>
            </TaskNameStyle>

            <ActionsStyle>
              <div className="extraStyles">
                <IconButton
                  color="error"
                  onClick={() => handleTaskDelete(task)}
                >
                  <DeleteForeverRoundedIcon />
                </IconButton>

                {task?.status === 'pendiente' && (
                  <IconButton
                    color="success"
                    onClick={() => handleTaskState(task)}
                  >
                    <CheckRoundedIcon />
                  </IconButton>
                )}
              </div>
            </ActionsStyle>
            <CreatedStyle>
              <p className="extraStyles">{`Creado: ${task?.creationDate}`}</p>
            </CreatedStyle>

            {task?.completionDate && (
              <CompletedStyle>
                <p className="extraStyles">{`Completado: ${task?.completionDate}`}</p>
              </CompletedStyle>
            )}
          </BodyContainer>
        </Background>
      ))}
    </>
  );
};

TaskCard.propTypes = {
  tasks: PropTypes.array.isRequired,
};
