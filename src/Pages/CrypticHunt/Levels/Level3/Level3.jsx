import React from 'react';
import ravenclaw from '../../../../assets/Cryptic/Level2/ravenclaw.png';
import gryffindor from '../../../../assets/Cryptic/Level2/gryffindor.png';
import slytherin from '../../../../assets/Cryptic/Level2/slytherin.png';
import './Level3.css';

const Level3 = () => {
  return (
    <div className='level1'>
      <div className="level-title">
        LEVEL 3: Triwizard Trials
      </div>
      <div className="level-story">
        SCOREBOARD: GRYFFINDOR: 3, RAVENCLAW: 4, SLYTHERIN: 2
      </div>
      <div className="house-image">
      <img src={gryffindor} alt="Gryffindor" />
        <img src={ravenclaw} alt="Ravenclaw" />
        <img src={slytherin} alt="Slytherin" />
      </div>
    </div>
  );
};

export default Level3;