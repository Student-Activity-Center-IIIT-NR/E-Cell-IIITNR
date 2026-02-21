import React from 'react';
import './Main.css';
import Grid_img from '../../../../assets/Images/BG/Grid.png'
import LOGO from '../3D_Logo/Ecell3D';
import LOGOMobile from "../3D_Logo_Mobile/3DMobile"

const Main = (props) => {
  return (
    <div>
    <div className="main-content">
    {props.load===false && <img src={Grid_img} alt="" style={{position:'absolute',width:'100%',bottom:"0", height:"60svh"}}/>}
      <div className="main-text">
        <div className="content-text">
          <div className='team-heading'>
          <div className="main-head">TEAM</div>
          <div className="main-head">E-CELL</div>
          </div>
        <div className="team-moto">
          <div className="moto1">ONE <span>TEAM</span>,</div>
          <div className="moto1">&nbsp;ONE <span>VISION</span></div>
        </div>
        {/* <div className="small-text">
          <div className="sub-small-text">Welcome to the Entrepreneur Cell of IIIT Naya Raipur,</div>
          <div className="sub-small-text">where dreams take flight and ventures succeed. Join</div>
          <div className="sub-small-text">us in shaping tomorrow's innovations!</div>
        </div> */}
        </div>
      </div>
      <div className="main-logo"><LOGO /></div>
      <div className="main-logo-mobile"><LOGOMobile/></div>
    </div>
   {props.load===false && <div className="explore-main">
        <div className="explore">
          <h3>EXPLORE</h3>
          <svg width="40" height="40" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3035 8.77622L8.49974 11.8362L4.70308 8.66289C4.63145 8.60335 4.5488 8.55851 4.45985 8.53092C4.37089 8.50333 4.27738 8.49353 4.18463 8.50208C4.09189 8.51063 4.00174 8.53736 3.91933 8.58076C3.83692 8.62415 3.76386 8.68334 3.70433 8.75497C3.6448 8.82659 3.59995 8.90924 3.57236 8.9982C3.54477 9.08715 3.53497 9.18067 3.54352 9.27342C3.55207 9.36616 3.57881 9.45631 3.6222 9.53872C3.66559 9.62113 3.72479 9.69419 3.79641 9.75372L8.04641 13.2954C8.17316 13.3996 8.33214 13.4565 8.4962 13.4565C8.66027 13.4565 8.81925 13.3996 8.94599 13.2954L13.196 9.87414C13.2688 9.81568 13.3293 9.74342 13.374 9.66152C13.4188 9.57961 13.4469 9.48966 13.4567 9.39685C13.4666 9.30404 13.4581 9.21019 13.4315 9.1207C13.405 9.03121 13.3611 8.94784 13.3022 8.87539C13.2433 8.80314 13.1706 8.74325 13.0885 8.69915C13.0063 8.65505 12.9163 8.6276 12.8235 8.61839C12.7307 8.60918 12.637 8.61838 12.5477 8.64546C12.4585 8.67255 12.3755 8.71698 12.3035 8.77622Z" fill="#3C7EFF"/>
<path d="M8.04641 8.33708C8.17316 8.44126 8.33214 8.49821 8.49621 8.49821C8.66027 8.49821 8.81925 8.44126 8.946 8.33708L13.196 4.91583C13.2688 4.85737 13.3293 4.78511 13.374 4.7032C13.4188 4.6213 13.4469 4.53135 13.4567 4.43854C13.4666 4.34573 13.4581 4.25188 13.4315 4.16239C13.405 4.0729 13.3611 3.98953 13.3022 3.91708C13.2438 3.84431 13.1715 3.78382 13.0896 3.73907C13.0077 3.69432 12.9178 3.6662 12.825 3.65633C12.7321 3.64645 12.6383 3.65502 12.5488 3.68153C12.4593 3.70805 12.376 3.75199 12.3035 3.81083L8.49975 6.87791L4.70308 3.70458C4.55843 3.58434 4.37194 3.5265 4.18463 3.54377C3.99733 3.56104 3.82456 3.65201 3.70433 3.79666C3.5841 3.94131 3.52626 4.1278 3.54352 4.3151C3.56079 4.50241 3.65176 4.67518 3.79641 4.79541L8.04641 8.33708Z" fill="#3C7EFF"/>
</svg>
        </div>
        </div>}
    </div>
  );
};

export default Main;
