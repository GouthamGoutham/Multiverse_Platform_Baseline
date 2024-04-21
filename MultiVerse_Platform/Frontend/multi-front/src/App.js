import logo from './logo.svg';
import './App.css';
import Login from './Authentication/Login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed useLocation import
import Register from './Authentication/Register/register';
import Home from './HomePage/home';
import About from './HomePage/Portfolio/about';
import BackgroundSetter from './BackgroundSetter';
import Contact from './HomePage/contact/contact';

function App() {
  return (
    <Router>
      <BackgroundSetter /> {/* No need to pass location prop */}
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/portfolio' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
