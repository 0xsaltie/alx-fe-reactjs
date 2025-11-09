import React from 'react';

function MainContent() {
  return (
   <main className="flex justify-center mt-8">
  <p
    style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      margin: '10px',
      maxWidth: '600px',
      background: 'linear-gradient(135deg, #f9fafb, #e0f7fa)',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontSize: '18px',
      color: '#333',
      textAlign: 'left',
      transition: 'transform 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.03)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    }}
  >
    I love to visit New York, Paris, and Tokyo.

    
  </p>

  
</main>

  );
}

export default MainContent;

