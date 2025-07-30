import React from 'react';
import { jsPDF } from 'jspdf';

interface CertificateProps {
  score: number;
  userId: string;
}

const Certificate: React.FC<CertificateProps> = ({ score, userId }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Certificate of Completion for ${userId}`, 10, 10);
    doc.text(`Score: ${score}`, 10, 20);
    doc.save('certificate.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className="p-2 mt-4 bg-green-500 text-white rounded"
      aria-label="Download certificate"
    >
      Download Certificate
    </button>
  );
};

export default Certificate;
