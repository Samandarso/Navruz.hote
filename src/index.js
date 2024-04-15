import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./i18next"

import Booking from './components/booking/Booking'
import About from './components/about/About'
import Rooms from './components/rooms/Rooms'
import Facilities from './components/facilities/Facilities'
import Blog from './components/blog/Blog'
import Contacts from './components/contacts/Contacts'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<App/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/facilities' element={<Facilities/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);