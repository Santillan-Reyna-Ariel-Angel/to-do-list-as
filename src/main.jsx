import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProviderAllTask } from './context/ContextAllTask.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderAllTask>
      <App />
    </ProviderAllTask>
  </StrictMode>
);
