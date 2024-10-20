import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./download-btn.css"
const DownloadButton = () => {
  const handleDownload = () => {

    const fileUrl = '/Moatasim-Ashraf.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Moatasim-Ashraf.pdf';
    link.click();
  };

  return (
    <button 
        onClick={handleDownload} 
        className="download-btn"
    >
        <FontAwesomeIcon icon={faDownload} />
    </button>
  );
};

export default DownloadButton;