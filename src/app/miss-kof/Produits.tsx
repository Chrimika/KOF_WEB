import React from 'react';

const ProductGrid = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* En-tête avec icône bleue */}
      <div style={{
        gridColumn: 'span 3',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        borderBottom: '1px solid #eee',
        paddingBottom: '15px',
        marginBottom: '15px'
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          backgroundColor: '#1e90ff',
          borderRadius: '4px'
        }}></div>
        <div>
          <div style={{ fontWeight: 'bold' }}>T-shirt Bleu Miss KOF</div>
          <div style={{ fontSize: '12px', color: '#666' }}>sbarer</div>
        </div>
      </div>

      {/* Image 1 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '468px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/mockup1.svg" 
            alt="MOCKUP"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Image 2 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '679px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/more-high-hope.svg" 
            alt="MORE HIGH AND HOPE UP"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>1/2</div>
      </div>

      {/* Image 3 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '412px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/cup-workup.svg" 
            alt="Cup Nookup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>cup_workup</div>
      </div>

      {/* Image 4 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '368px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/notebook-mockup.svg" 
            alt="Notebook Mockup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>notebook_mockup</div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/image-4.svg" 
            alt="Notebook Mockup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>notebook_mockup</div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '371px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/image-3.svg" 
            alt="Notebook Mockup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>notebook_mockup</div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '212px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/image-2.svg" 
            alt="Notebook Mockup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>notebook_mockup</div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '100%',
          height: '300px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/images/image-1.svg" 
            alt="Notebook Mockup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>notebook_mockup</div>
      </div>

      {/* Case vide pour compléter la grille */}
      <div></div>
    </div>
  );
};

export default ProductGrid;