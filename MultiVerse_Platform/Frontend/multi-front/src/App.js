import logo from './logo.svg';
import './App.css';
import Login from './Authentication/Login/login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './Authentication/Register/register';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
