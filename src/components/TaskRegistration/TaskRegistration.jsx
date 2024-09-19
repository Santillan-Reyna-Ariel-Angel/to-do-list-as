import { useState, useContext, useEffect } from 'react';
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

import { ContextAllTask } from '../../context/ContextAllTask';
import { TabsMenu } from '../TabsMenu/TabsMenu';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateFormatted } from '../../utils/globalFunctions';

export const TaskRegistration = () => {
  const { globalTaskList, setGlobalTaskList } = useContext(ContextAllTask);

  const PRIORITY_LIST = ['Alta', 'Media', 'Baja'];

  let taskDataDefault = {
    id: null,
    priority: '',
    name: '',
    status: 'pendiente',
    creationDate: null,
    completionDate: null,
  };

  const [task, setTask] = useState(taskDataDefault);

  const AddTask = () => {
    let newTask = {
      ...task,
      id: uuidv4(),
      creationDate: getCurrentDateFormatted(),
    };
    setGlobalTaskList([...globalTaskList, newTask]);
    setTask(taskDataDefault);
  };

  console.log('globalTaskList', globalTaskList);

  // Cargar datos en globalTaskList si existen en localStorage (Montaje del componente).
  useEffect(() => {
    let data = localStorage.getItem('LocalStorageAllTasks');
    if (data) {
      setGlobalTaskList(JSON.parse(data));
    }
  }, []);

  // Cargar datos en localStorage cada vez que globalTaskList se actualice.
  useEffect(() => {
    localStorage.setItem(
      'LocalStorageAllTasks',
      JSON.stringify(globalTaskList)
    );
  }, [globalTaskList]);

  return (
    <>
      <Background>
        <BodyContainer>
          <PriorityStyle>
            <FormControl className="extraStyles">
              <InputLabel>Prioridad</InputLabel>
              <Select
                label="Prioridad"
                value={task?.priority}
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
              value={task?.name}
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

      <TabsMenu />
    </>
  );
};
