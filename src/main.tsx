import { createRoot } from 'react-dom/client'
import './index.css'

// Simple test to see if basic React works
const TestApp = () => (
  <div style={{ 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  }}>
    <h1 style={{ color: '#333' }}>Festive Feast Pro - Test Mode</h1>
    <p>This is a minimal test to verify React is working.</p>
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'white', borderRadius: '8px' }}>
      <h2>System Status:</h2>
      <ul>
        <li>React: ✅ Working</li>
        <li>Vite: ✅ Working</li>
        <li>Environment: {import.meta.env.MODE}</li>
        <li>Base URL: {import.meta.env.BASE_URL}</li>
        <li>Build Time: {new Date().toISOString()}</li>
      </ul>
    </div>
  </div>
);

// Add debugging
console.log('Main.tsx: Starting app initialization');
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found!</div>';
  throw new Error('Root element not found');
}

console.log('Main.tsx: Root element found, creating React root');

try {
  const root = createRoot(rootElement);
  console.log('Main.tsx: React root created, rendering app');
  root.render(<TestApp />);
  console.log('Main.tsx: App rendered successfully');
} catch (error) {
  console.error('Main.tsx: Error during app initialization:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial;">
      <h2>Application Failed to Load</h2>
      <p><strong>Error:</strong> ${error}</p>
      <p><strong>Time:</strong> ${new Date().toISOString()}</p>
    </div>
  `;
}
