import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

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
  root.render(<App />);
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
