import React from 'react'
import './TeamHome.css'
import Main from '../../Team/Team_Home/Main/Main'


const TeamHome = (props) => {
  return (
    <div className="home">
        <Main load={props.load}/>
    </div>
  )
}

export default TeamHome