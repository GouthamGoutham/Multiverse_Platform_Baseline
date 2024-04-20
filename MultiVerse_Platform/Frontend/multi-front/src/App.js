import logo from './logo.svg';
import './App.css';
import Login from './Authentication/Login/login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './Authentication/Register/register';
import Home from './HomePage/home';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
