import React from 'react';
import './Level2.css'; // Import the CSS file for styling
import pdfFile from '../../../../assets/Cryptic/Level3/esummit_cryptic_pdf.pdf'; // Replace with your PDF file path

const Level2 = () => {
  return (
    <div className='level1'>
      <div className="level-title">
        LEVEL 2: Hermione Sings a Song
      </div>
      <div className="level-story">
        What is Hermione singing?
      </div>
      <div className="pdf-container">
        <iframe 
          src={pdfFile} 
          width="100%" 
          height="500px" 
          title="Musical Sheet PDF"
        >
          Your browser does not support PDFs. Please download the PDF to view it.
        </iframe>
        <a href={pdfFile} download="musical_sheet.pdf" className="download-button">
          Download Musical Sheet
        </a>
      </div>
    </div>
  );
};

export default Level2;