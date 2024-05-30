import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AboutMe from './AboutMe'
import Hoohah from './Hoohah'

function App() {
 

  return (
    <div>
    <h1>Welcome to my Ricky and Morty Webpage!</h1>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/aboutme' element={ <AboutMe/> } />
          <Route path='/hoohah' element={ <Hoohah/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
