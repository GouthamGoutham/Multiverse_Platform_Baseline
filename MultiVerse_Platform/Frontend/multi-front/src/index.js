import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundSetter from './BackgroundSetter';
import logBackground from '../src/Authentication/Login/Login.jpg';
import home from '../src/HomePage/homepage.jpg';
import portfoliobg from '../src/HomePage/Portfolio/portfolio.jpg'; 
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

reportWebVitals();
