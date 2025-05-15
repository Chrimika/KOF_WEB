"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        height: 1,
        padding: "10px 40px",
        backgroundColor: "#FF8C00",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          position: "fixed",
          top: 10,
          left: 40,
          zIndex: 1000,
        }}
      >
        <Image
          src="/assets/images/Logo.png"
          alt="Logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Menu icon */}
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 40,
          zIndex: 1000,
        }}
      >
        <Image
          src="/assets/images/more.png"
          alt="Menu"
          width={50}
          height={50}
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div
            ref={menuRef}
            style={{
              position: "absolute",
              top: 60,
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              borderRadius: 6,
              overflow: "hidden",
              zIndex: 2000,
            }}
          >
            <div
              onClick={() => {
                setShowMenu(false);
                router.push("/");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              Acceuil
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                router.push("/actualites");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              Actualités
            </div>

              

            <div
              onClick={() => {
                setShowMenu(false);
                router.push("/galeries");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              Galeries
            </div>
            <div
            onClick={() => {
                setShowMenu(false);
                router.push("/miss-kof");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Miss KOF
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
