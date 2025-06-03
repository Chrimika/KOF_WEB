"use client";

import React, { useState } from "react";
import ScanGenerator from "./ScanGenerator";

export default function ScanLanding() {
  const [choice, setChoice] = useState<"OM" | "MOMO" | null>(null);

  if (choice) {
    return <ScanGenerator mode={choice} onBack={() => setChoice(null)} />;
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#fff", padding: "0 0" }}>
      <img
        src="/assets/images/qrLanding.jpg"
        alt="QR Landing"
        style={{ width: "100%", maxWidth: "400px", objectFit: "cover" }}
        className="mb-4"
      />
      <h1 className="text-2xl font-medium mb-2 text-dark text-center">
        Génère ton QR pour retrait OM ou MOMO
      </h1>
      <p className="text-sm text-dark mb-4 max-w-xs text-center">
        Ce service te permet de générer un code QR pour faciliter les retraits Orange Money ou Mobile Money. Choisis ton service pour commencer.
      </p>
      <div className="flex gap-2 px-1 py-2 flex-wrap justify-center flex-row">
        <button
          style={{ backgroundColor: "#ff7900", width: '150px' }}
          className="flex items-center gap-1 px-4 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-orange-600 transition text-center align-items-center"
          onClick={() => setChoice("OM")}
        >
          <img src="/assets/images/OM.png" alt="OM" style={{ width: "25px", height: "25px" }} />
           OM
        </button>
        <button
          style={{ backgroundColor: "#fecc01",width:'150px' }}
          className="flex items-center gap-1 px-4 bg-yellow-600 text-white rounded-lg shadow-lg text-lg font-semibold transition text-center"
          onClick={() => setChoice("MOMO")}
        >
          <img src="/assets/images/MOMO.png" alt="MOMO" style={{ width: "40px", height: "40px" }} />
          MOMO
        </button>
      </div>
    </div>
  );
}