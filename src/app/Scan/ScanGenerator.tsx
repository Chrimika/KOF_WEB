"use client";

import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download } from "lucide-react";

const SYNTAX = {
  OM: "#150*14*{CODE}*{NUMERO}#",
  MOMO: "#126*1*{CODE}*{NUMERO}#",
};

export default function ScanGenerator({
  mode,
  onBack,
}: {
  mode: "OM" | "MOMO";
  onBack: () => void;
}) {
  const [code, setCode] = useState("");
  const [numero, setNumero] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  const syntax = SYNTAX[mode]
    .replace("{CODE}", code || "CODE")
    .replace("{NUMERO}", numero || "NUMERO");

  const encodedUSSD = "tel:" + encodeURIComponent(syntax);

  const handleDownloadPDF = async () => {
    if (!qrRef.current) return;
    // Sauvegarde l'ancien fond du body
    const oldBg = document.body.style.background;
    document.body.style.background = "#fff";
    const canvas = await html2canvas(qrRef.current);
    // Restaure l'ancien fond du body
    document.body.style.background = oldBg;
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [80, 100],
    });
    pdf.addImage(imgData, "PNG", 10, 10, 60, 60);
    // Branding en bas à gauche
    pdf.setFontSize(10);
    pdf.setTextColor("#888");
    pdf.text("qr.cm", 12, 75);
    pdf.save(`QR-Code-${mode}.pdf`);
  };

  return (
    <div style={{flex:1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#fff"}}>
      <button
        onClick={onBack}
        className="absolute top-6 left-6 px-4 py-2 bg-white/80 rounded-lg text-black font-semibold shadow hover:bg-white"
      >
        ← Retour
      </button>
      <div className="mb-5 mt-5">
        <span
          className={`text-2xl font-mono px-4 py-2 rounded-lg ${
            mode === "OM" ? "text-dark" : "text-dark"
          }`}
        >
          {syntax}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
        <input
          type="text"
          placeholder="Code Marchand"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{padding:'10px 15px',backgroundColor:'#f5f5f5',width:'80%',fontSize:'20px',margin:'20px 0'}}
        />
        <input
          type="text"
          placeholder="Numéro Marchand"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          style={{padding:'10px 15px',backgroundColor:'#f5f5f5',width:'80%',fontSize:'20px'}}
        />
      </div>
      <div ref={qrRef} style={{ position: "relative", width: 300, height: 300, background:'#fff' }}>
        <QRCodeCanvas
          value={encodedUSSD}
          size={300}
          level="H"
          includeMargin={true}
          bgColor="#fff"
          fgColor={mode === "OM" ? "#ff7900" : "#fecc01"}
        />
        {/* Branding */}
        <span
          style={{
            position: "absolute",
            left: 8,
            bottom: 8,
            fontSize: 14,
            color: "#888",
            background: "#fff9",
            borderRadius: 6,
            padding: "2px 8px",
          }}
        >
          qr.cm
        </span>
      </div>
      {/* <button
        onClick={handleDownloadPDF}
        className="mt-15 px-6 py-3 flex items-center gap-2  transition-all"
        style={{border:'1px solid gray', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', color: '#222', fontWeight: 'bold', fontSize: '16px',width:'70%', maxWidth: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}
      >
        <Download size={20} className="text-[#222]" />
        Télécharger en PDF
      </button> */}
    </div>
  );
}