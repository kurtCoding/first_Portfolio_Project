import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AboutMe from './AboutMe'
import Hoohah from './Hoohah'
import AboutRnM from './AboutRnM'
import Characters from './Characters'
import ShowPage from './ShowPage'
import VideoShowPage from './VideoShowPage'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/AboutMe' element={ <AboutMe/> } />
          <Route path='/Hoohah' element={ <Hoohah/> } />
          <Route path='/AboutRnM' element={ <AboutRnM/> } />
          <Route path='/Characters' element={ <Characters/> } />
          <Route path='/ShowPage/:id' element={ <ShowPage/> } />
          <Route path='/VideoShowPage/:id' element={ <VideoShowPage/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
