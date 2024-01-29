import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logements from './pages/Logement'
import Propos from './pages/A_Propos'
import Error from './pages/Error'
import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/à-propos" element={<Propos />} />
        <Route path="/accomodation/:id" element={<Logements/>}/>
        <Route path="/accomodation/*" element={<Error />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
