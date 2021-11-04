import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DevsUnitedProvider } from "./contexts/DevsUnitedContext";


ReactDOM.render(
  <React.StrictMode>
    <DevsUnitedProvider>
      <App />
    </DevsUnitedProvider>   
  </React.StrictMode>,
  document.getElementById('root')
);

