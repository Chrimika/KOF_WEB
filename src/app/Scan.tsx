"use client";

import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Scan() {
  const qrRef = useRef(null);
  const ussdCode = '#150*14*264831*693057569#';
  const encodedUSSD = 'tel:' + encodeURIComponent(ussdCode);

  const handleDownloadPDF = async () => {
    if (!qrRef.current) return;

    const canvas = await html2canvas(qrRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [80, 100], // Taille personnalisée
    });

    pdf.addImage(imgData, 'PNG', 10, 10, 60, 60); // position et taille dans le PDF
    pdf.save('QR-Code-OrangeMoney.pdf');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
      margin: 0,
    }}>
      <div ref={qrRef} style={{ position: 'relative', width: 256, height: 256 }}>
        <QRCodeCanvas
          value={encodedUSSD}
          size={256}
          level="H"
          includeMargin={true}
          bgColor="#ffffff"
          fgColor="#77e1fd"
        />
        <img
          src="/assets/images/ams.png"
          alt="Logo"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            borderRadius: 25,
            backgroundColor: '#ffffff',
            padding: 4,
          }}
        />
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          backgroundColor: '#77e1fd',
          color: '#000',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Télécharger en PDF
      </button>
    </div>
  );
}
