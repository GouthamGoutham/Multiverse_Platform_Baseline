import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundSetter from './BackgroundSetter';
import logBackground from '../src/Authentication/Login/Login.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundSetter imageUrl={logBackground} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
