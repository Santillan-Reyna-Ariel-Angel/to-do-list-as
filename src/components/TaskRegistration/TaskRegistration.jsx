import { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {
  Background,
  BodyContainer,
  PriorityStyle,
  TaskStyle,
  BtnStyle,
} from './TaskRegistrationStyles';

import { TaskCard } from './../TaskCard/TaskCard';

export const TaskRegistration = () => {
  const PRIORITY_LIST = ['Alta', 'Media', 'Baja'];

  let taskDataDefault = {
    priority: '',
    name: '',
  };

  const [task, setTask] = useState(taskDataDefault);
  const [taskList, setTaskList] = useState([]);

  const AddTask = () => {
    setTaskList([...taskList, task]);
    setTask(taskDataDefault);
  };

  console.log('taskList', taskList);

  return (
    <>
      <Background>
        <BodyContainer>
          <PriorityStyle>
            <FormControl className="extraStyles">
              <InputLabel>Prioridad</InputLabel>
              <Select
                label="Prioridad"
                value={task.priority}
                name="priority"
                onChange={(event) =>
                  setTask({
                    ...task,
                    [event.target.name]: event.target.value,
                  })
                }
                size={'medium'}
              >
                {PRIORITY_LIST.map((priority, index) => (
                  <MenuItem key={index} value={priority}>
                    {priority}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </PriorityStyle>
          <TaskStyle>
            <TextField
              className="extraStyles"
              name="name"
              label={'Tarea'}
              variant="outlined"
              value={task.name}
              onChange={(event) =>
                setTask({
                  ...task,
                  [event.target.name]: event.target.value,
                })
              }
              size={'medium'}
            />
          </TaskStyle>
          <BtnStyle>
            <Button
              className="extraStyles"
              variant="contained"
              color="success"
              endIcon={<AddCircleRoundedIcon />}
              onClick={() => AddTask()}
            >
              Agregar
            </Button>
          </BtnStyle>
        </BodyContainer>
      </Background>

      <TaskCard />
    </>
  );
};
