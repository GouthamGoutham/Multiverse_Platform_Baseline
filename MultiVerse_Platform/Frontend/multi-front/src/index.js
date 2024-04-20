import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundSetter from './BackgroundSetter';
import logBackground from '../src/Authentication/Login/Login.jpg';
import home from '../src/HomePage/homepage.jpg';

const RouteBackgrounds = {
  '/':logBackground,
  '/login': logBackground,
  '/register' : logBackground,
  '/home' : home
};
const Background = RouteBackgrounds[window.location.pathname];  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BackgroundSetter imageUrl={Background} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
