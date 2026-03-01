import React from 'react'
import Home from './Pages/Home/Home'
import Team from './Pages/Team/Team.jsx';
import Events from "./Pages/Events/Events.tsx"
import { Route, Routes } from 'react-router-dom';
import ESummit2026 from './Pages/E-Summit/src/App.jsx';

const App = () => {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/events' element={<Events />} />
        <Route path="/team" element={<Team/>}/>
        <Route path="/esummit" element={<ESummit2026 />} />
      </Routes>
    </div>
  )
}

export default App