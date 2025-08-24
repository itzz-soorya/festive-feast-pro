import React from 'react';

const FallbackApp: React.FC = () => {
  console.log('FallbackApp rendering');
  
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>
        Festive Feast Pro - Minimal Test
      </h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>Application Status: Running</h2>
        <p>If you see this page, React is working correctly.</p>
        
        <div style={{ marginTop: '20px' }}>
          <h3>Debug Information:</h3>
          <ul>
            <li>Environment: {import.meta.env.MODE}</li>
            <li>Base URL: {import.meta.env.BASE_URL}</li>
            <li>Timestamp: {new Date().toISOString()}</li>
            <li>User Agent: {navigator.userAgent}</li>
          </ul>
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#e8f5e8',
          borderRadius: '4px'
        }}>
          <strong>Next Steps:</strong>
          <ol>
            <li>Check browser console for any errors</li>
            <li>Verify all assets are loading correctly</li>
            <li>Test routing functionality</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FallbackApp;
