import logo from './logo.svg';
import './App.css';
import Login from './Authentication/Login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed useLocation import
import Register from './Authentication/Register/register';
import Home from './HomePage/home';
import About from './HomePage/Portfolio/about';
import BackgroundSetter from './BackgroundSetter';
import Contact from './HomePage/contact/contact';
import Sm_Home from './shopsphere_marketplace/sm_home/sm_home';
import Sm_Products from './shopsphere_marketplace/sm_products/sm_products';
import Sm_Prod_Dtls from './shopsphere_marketplace/sm_products/sm_prod_dtls/sm_prod_dtls';
import Sm_cart from './shopsphere_marketplace/sm_cart/sm_cart';
import Te_Home from './tastetrial_express/te_home/te_home';
import Te_Restaurants from './tastetrial_express/te_restaurants/te_restaurants';
import Te_food_items from './tastetrial_express/te_food_items/te_food_items';
import Te_Food_Dtls from './tastetrial_express/te_food_details/te_food_dtls';
import Te_Order_Dtls from './tastetrial_express/te_order_dtls/te_order_dtls';
import Vv_Home from './vital-verse care/vv_Home/vv_home';
import Vv_ResourceDetails from './vital-verse care/vv_resources/vv_resource';
import Vv_Hospitals from './vital-verse care/vv_appointment/vv_hospitals/vv_hospitals';
import Vv_Specialist from './vital-verse care/vv_appointment/vv_specialists/vv_specialist';
import DoctorDetails from './vital-verse care/vv_appointment/vv_doctor_dtls/vv_doctor_dtls';
import Vv_User_Details from './vital-verse care/vv_user_dtls/vv_user_dtls';
import FeedScreen from './Connect_Verse_Platform/Cv_Feed/cv_feed';
import ProfileScreen from './Connect_Verse_Platform/Cv_Profile/cv_profile';
import ChatScreen from './Connect_Verse_Platform/Cv_chat/cv_chat';
import UserList from './Connect_Verse_Platform/Cv_chat/users_list';

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
        <Route path='/shopsphere' element={<Sm_Home/>}></Route>
        <Route path='/sm_products' element={<Sm_Products/>}></Route>
        <Route path='/sm_cart' element={<Sm_cart/>}></Route>
        <Route path='/productdetails/:id' element={<Sm_Prod_Dtls/>}></Route>
        <Route path='/tastetrial' element={<Te_Home/>}></Route>
        <Route path='/te_restaurants' element={<Te_Restaurants/>}></Route>
        <Route path='/foodItems/:id' element={<Te_food_items/>}></Route>
        <Route path='/foodDetails/:id' element={<Te_Food_Dtls/>}></Route>
        <Route path='/te_order_dtls' element={<Te_Order_Dtls/>}></Route>
        <Route path='/vitalverse' element={<Vv_Home/>}></Route>
        <Route path='/resource/:resourceId' element={<Vv_ResourceDetails/>}></Route>
        <Route path='/vv_Appointment' element={<Vv_Hospitals/>}></Route>
        <Route path='/specialist/:hospitalId' element={<Vv_Specialist/>}></Route> 
        <Route path='/specialist_dtls/:doctorid' element={<DoctorDetails/>}></Route>
        <Route path='/vv_user_dtls' element={<Vv_User_Details/>}></Route>
        <Route path='/connectverse' element={<FeedScreen/>}></Route>
        <Route path='/cv_Profile' element={<ProfileScreen/>}></Route>
        <Route path='/cv_chat' element={<UserList/>}></Route>
        <Route path="/chat/:recipientId" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
