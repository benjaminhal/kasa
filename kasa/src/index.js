import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logements from './pages/Logement'
import Propos from './pages/A_Propos'
import Error from './pages/Error'
import "./index.scss"
import Header from './components/Header'
import Footer from './components/Footer'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Propos />} />
          <Route path="/accomodation/:id" element={<Logements/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer/>  
    </Router>
  </React.StrictMode>
)
