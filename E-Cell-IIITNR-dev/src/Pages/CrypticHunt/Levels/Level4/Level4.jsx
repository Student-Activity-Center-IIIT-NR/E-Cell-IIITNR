import React from 'react';
import './Level4.css'; // Import the CSS file for styling
import encryptedFile from '../../../../assets/Cryptic/Level4/hogwarts.txt'; // Replace with your encrypted text file path

const Level4 = () => {
  return (
    <div className='level1'>
      <div className="level-title">
        LEVEL 4: The Forbidden Cipher of the Triwizard Tournament
      </div>
      <div className="level-story">
        You’ve discovered a mysterious scroll hidden in the Triwizard Cup. The scroll contains an encrypted message that seems to be related to the Triwizard Tournament. Decipher the message to uncover the hidden truth.
        Clue: The message is encrypted using a cipher that requires a key. 
        The key is the name of the object that chose the champions in the Triwizard Tournament, and there are 12 such keys.
        The decrpted output is the answer to your problems.
      </div>
      <div className="encrypted-container">
        <div className="encrypted-message">
          <pre>
          NeHCfD9/maHZI6LrsEXAAIXWepojKWrQJWQfr63iRd9bgOEBewDJmfE8ZZj0nzKQLB2n/Y+xD+rpZ6bsm9gbUw==
          </pre>
        </div>
        <a href={encryptedFile} download="encrypted_message.txt" className="download-button">
          Download Encrypted Message
        </a>
      </div>
    </div>
  );
};

export default Level4;