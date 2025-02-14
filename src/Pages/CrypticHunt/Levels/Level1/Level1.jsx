import React from 'react';
import './Level1.css'; // Import the CSS file for styling
import audioFile from '../../../../assets/Cryptic/Level1/audio/level1.wav'; // Replace with your audio file path

const Level1 = () => {
  return (
    <div className='level1'>
      <div className="level-title">
        LEVEL 1: The Muggle Challenge
      </div>
      <div className="level-story">
        On 6 June, at 6pm Harry heard a creature screaming some message to him? what's the creature asking Harry?
      </div>
      <div className="audio-container">
        <audio controls>
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <a href={audioFile} download="morse_code_audio.mp3" className="download-button">
          Download Audio
        </a>
      </div>
    </div>
  );
};

export default Level1;