import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar.jsx'
import Load from './Components/Load_Page/Load.jsx';
import ScrollToTop from "react-scroll-to-top";
import Team from './Pages/Team/Team.jsx';

import Gallery from './Components/Home/Gallery/Gallery'
import { Route, Routes } from 'react-router-dom';
import ESummitHome from './Pages/E-Summit/Home/ESummitHome.jsx';
import CrypticHome from './Pages/CrypticHunt/Home/Home.jsx';
import Level3 from './Pages/CrypticHunt/Levels/Level3/Level3.jsx';
import Level1 from './Pages/CrypticHunt/Levels/Level1/Level1.jsx';
import Level2 from './Pages/CrypticHunt/Levels/Level2/Level2.jsx';
import Level5 from './Pages/CrypticHunt/Levels/Level5/Level5.jsx';
import Level4 from './Pages/CrypticHunt/Levels/Level4/Level4.jsx';
const App = () => {


//    const [loading,setLoading] = React.useState(true);

//    React.useEffect(()=>{
//     document.body.style.overflow = 'hidden';
//     const timer4 = setTimeout(()=>{
//       document.body.style.overflow = 'visible';
//       setLoading(false);
//     },3000)
//     return () => clearTimeout(timer4);
//    },[loading]);

//    React.useState(()=>{
//     document.body.style.overflow = 'hidden';
//     const timer3 = setTimeout(()=>{
//         document.body.style.overflow = 'visible';
//     },500)
//     return () => clearTimeout(timer3);
// },[])

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/esummit" element={<ESummitHome/>}/>
        <Route path="/cryptic" element={<CrypticHome/>}/>
        <Route path="/level1" element={<Level1/>} />
        <Route path="/level2" element={<Level2/>} />
        <Route path="/level3" element={<Level3/>}/>
        <Route path="/level4" element={<Level4/>} />
        <Route path="/level5" element={<Level5/>}/>
      </Routes>
    </div>
  )
}

export default App