import React, { lazy, Suspense } from 'react';
import { Card } from 'ui-library';

// Dynamically import the Button component from the remote app
const RemoteButton = lazy(() => import('remote/Button'));

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Host Application</h1>
      <p>This is the host application that consumes remote components</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Local Component from UI Library:</h2>
        <Card title="Local Card Component">
          This card is from the shared UI library package
        </Card>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Remote Component:</h2>
        <Suspense fallback={<div>Loading remote button...</div>}>
          <RemoteButton />
        </Suspense>
      </div>
    </div>
  );
}

export default App;