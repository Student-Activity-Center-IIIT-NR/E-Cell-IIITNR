import React from 'react';
import './Load.css';
import logo from '/EcellLogo3D.png';
import { dotPulse } from 'ldrs'

dotPulse.register()

const Load = () => {
    return (
        <div className="loading">
            <div className="load">
                <img src={logo} alt="Logo" />
            </div>
<l-dot-pulse
  size="43"
  speed="1.3" 
  color="white" 
></l-dot-pulse>
        </div>
    );
};

export default Load;
