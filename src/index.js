import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DevsUnitedProvider } from "./contexts/DevsUnitedContext";


ReactDOM.render(
  <React.StrictMode>
    <DevsUnitedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DevsUnitedProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

