import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextAllTask = createContext({});

export const ProviderAllTask = ({ children }) => {
  const [globalTaskList, setGlobalTaskList] = useState([]);

  return (
    <ContextAllTask.Provider value={{ globalTaskList, setGlobalTaskList }}>
      {children}
    </ContextAllTask.Provider>
  );
};

ProviderAllTask.propTypes = {
  children: PropTypes.node.isRequired,
};
