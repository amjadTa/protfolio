import React from 'react';
import Button from 'utils/Button';

const PdfDownloadFile = () => {
  const handleDownload = () => {
    const fileUrl = `/files/Amjad Tarif.pdf`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Amjad Tarif.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} text='Download CV' />
  );
};

export default PdfDownloadFile;
