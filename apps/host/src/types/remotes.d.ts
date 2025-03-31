declare module 'remote/Button' {
    import React from 'react';
    
    const Button: React.FC;
    
    export default Button;
  }
  
  // For future remote components
  declare module 'remote/*' {
    const Component: React.ComponentType<any>;
    export default Component;
  }