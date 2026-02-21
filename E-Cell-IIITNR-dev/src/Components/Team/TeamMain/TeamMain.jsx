import React from "react"
import './TeamMain.css'
import TeamMember from "../TeamMember/TeamMember"
import TeamData from "../../../assets/Data/TeamData"
import { Link } from "react-router-dom"

export default function TeamMain(){
    return(
        <div className="team-main">
            <div className="team">
                {
                    TeamData.map((data,index)=>{
                        return <TeamMember name={data.name} designation={data.designation} linkedIn={data.linkedIn} image={data.img} key={index}/>
                    })
                }
            </div>
        </div>
    )
}