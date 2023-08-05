import React from 'react'
import Navbar from './components/Navbar.js/Navbar'
import Carousel from './components/carousel/Carousel'
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import RelatedSearch from './components/RelatedSearch/Index';
import Home from './components/Home/Home';
import Login from './components/Sigin/Signin'
import Contactus from './components/Contactus/Contactus';
import Faq from './components/FAQ.js/Faq';
import Profile from './components/Profile/Profile';
import Room from './components/Detail/Room';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate
} from 'react-router-dom'; 
import Signup from './components/SignUp.js/Signup';
function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  return ( 
    <BrowserRouter>
    { isLoggedIn ? 
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/room' element={<Room />} />
        <Route path='*' element={<Navigate to="/" /> } />
    </Routes>
    :
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='*' element={<Navigate to="/" /> } />
        <Route path='/room' element={<Room />} />
       
    </Routes>
    }  
  </BrowserRouter>
  )
}

export default App 