import { useContext, useState } from 'react';
import {
  Button,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Tab,
  Radio,
  RadioGroup,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import { ContextAllTask } from '../../context/ContextAllTask';
import { TaskCard } from '../TaskCard/TaskCard';

export const TabsMenu = () => {
  const { globalTaskList, setGlobalTaskList } = useContext(ContextAllTask);
  const [tab, setTab] = useState('1');
  const [filter, setFilter] = useState('Todos');

  const filterOptions = ['Todos', 'Alta', 'Media', 'Baja'];

  const pendingTasks = globalTaskList.filter(
    (task) => task.status === 'pendiente'
  );

  const pendingTasksFiltered = () => {
    if (filter === 'Todos') {
      return pendingTasks;
    } else {
      let newPendingTasks = pendingTasks.filter(
        (task) => task.priority === filter
      );
      return newPendingTasks;
    }
  };

  const completedTasks = globalTaskList.filter(
    (task) => task.status !== 'pendiente'
  );

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const deleteCompletedAllTasks = () => {
    setGlobalTaskList(pendingTasks); // conservar solo las tareas pendientes
  };

  return (
    <TabContext value={tab}>
      <Box
        sx={{
          display: 'grid',
          marginTop: '20px',
          width: '500',
          justifyContent: 'center',
        }}
      >
        <TabList onChange={handleChangeTab} aria-label="Menu de tareas">
          <Tab
            label={`pendientes (${pendingTasks?.length})`}
            value="1"
            sx={{ fontWeight: 'bold', color: '#051e34' }}
          />
          <Tab
            label={`completados (${completedTasks?.length})`}
            value="2"
            sx={{
              fontWeight: 'bold',
              color: '#051e34',
            }}
          />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ padding: '10px' }}>
        <Box
          sx={{
            display: 'grid',
            marginTop: '10px',
            width: '500',
            justifyContent: 'center',
          }}
        >
          {pendingTasks.length > 0 && (
            <>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Filtrar por prioridad:
                </FormLabel>
                <RadioGroup
                  row
                  name="filterTasksOptions"
                  value={filter}
                  onChange={(event) => {
                    setFilter(event.target.value);
                  }}
                >
                  {filterOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio size="small" />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <TaskCard
                tasks={
                  filter?.status === 'todos'
                    ? pendingTasks
                    : pendingTasksFiltered()
                }
              />
            </>
          )}
        </Box>
      </TabPanel>
      <TabPanel value="2" sx={{ padding: '10px' }}>
        <Box
          sx={{
            display: 'grid',
            marginTop: '10px',
            width: '500',
            justifyContent: 'center',
          }}
        >
          {completedTasks?.length > 0 && (
            <>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteCompletedAllTasks()}
              >
                Eliminar todos
              </Button>

              <TaskCard tasks={completedTasks} />
            </>
          )}
        </Box>
      </TabPanel>
    </TabContext>
  );
};
