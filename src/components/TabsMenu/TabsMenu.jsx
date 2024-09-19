import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ContextAllTask } from '../../context/ContextAllTask';

export const TabsMenu = () => {
  const [tab, setTab] = useState('1');
  const { globalTaskList } = useContext(ContextAllTask);

  const pendingTasks = globalTaskList.filter(
    (task) => task.status === 'pendiente'
  );

  const completedTasks = globalTaskList.filter(
    (task) => task.status !== 'pendiente'
  );

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
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
          <Tab label={`pendientes (${pendingTasks?.length})`} value="1" />
          <Tab label={`completados (${completedTasks?.length})`} value="2" />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ padding: '10px' }}>
        <TaskCard tasks={pendingTasks} />
      </TabPanel>
      <TabPanel value="2" sx={{ padding: '10px' }}>
        <TaskCard tasks={completedTasks} />
      </TabPanel>
    </TabContext>
  );
};
