import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Remote Application</h1>
      <p>This app exposes components to be used in the host application</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Exposed Button Component:</h2>
        <Button />
      </div>
    </div>
  );
}

export default App;