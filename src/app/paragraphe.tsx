import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Paragraphe() {
  return (
    <div className={inter.className} style={{
      backgroundColor: '#FF8C00',
      flex: 0.2,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      justifyContent:'center'

    }}>
      <p style={{
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 1.6,
        maxWidth:'600px',

      }}>
        Le plus grand évènement de la pop culture camerounaise est de retour et vous feriez bien d’être prêts pour tout ce qu’on vous emmène cette année.
      </p>
    </div>
  );
}
