import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationContextProvider } from './AppContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <App />
    </ApplicationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
