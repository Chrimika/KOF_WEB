import Image from "next/image";

export default function Header() {
  return (
    <div style={{
      flex:0.1,
      height:50,
      padding: '10px 40px',
      backgroundColor: '#FF8C00',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* Image de gauche (Logo) fixée à gauche */}
      <div style={{
        position: 'fixed',
        top: 10,
        left: 40,
        zIndex: 1000
      }}>
        <Image
          src="/assets/images/Logo.png"
          alt="Logo"
          width={50}
          height={50}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Image de droite (Menu) fixée à droite */}
      <div style={{
        position: 'fixed',
        top: 10,
        right: 40,
        zIndex: 1000
      }}>
        <Image
          src="/assets/images/more.png"
          alt="Menu"
          width={50}
          height={50}
          style={{ objectFit: 'contain', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}
