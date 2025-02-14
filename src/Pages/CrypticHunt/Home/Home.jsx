import { Button } from '@mui/material'
import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const CrypticHome = () => {
    const style = {
        color:"#FFD700",
        fontFamily: "Optimus", 
        fontSize: "20px",
        border: "2px solid #FFD700"
    }
  return (
    <div className='cryptic-home'>
        <h1>E-Summit</h1>
        <h2>Cryptic Hunt</h2>

         <div className="cryptic-levels">
         <NavLink to="/level1"><Button sx={style}>LEVEL 1: The Muggle Challenge</Button></NavLink>
         <NavLink to="/level2"><Button sx={style}>LEVEL 2: Hermione sings a song</Button></NavLink>
         <NavLink to="/level3"><Button sx={style}>LEVEL 3: Triwizard Trials</Button></NavLink>
         <NavLink to="/level4"><Button sx={style}>LEVEL 4: A Forgotten Cipher</Button></NavLink>
         <NavLink to="/level5"><Button sx={style}>LEVEL 5: The Lost Horcrux</Button></NavLink>
         <div className="answer-sheet" style={{color:"white", fontFamily:"esummit"}}>ANSWER THE QUESTIONS IN THIS GOOGL FORM: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBi862Ow7hFnw8VdpD14OZsb2l1YYoTBkCE9t5cFArvAZUxQ/viewform?usp=sharing" style={{color:"pink",fontSize:"20px", textDecoration:"underline"}}>LINK</a></div>
         </div>
    </div>
  )
}

export default CrypticHome