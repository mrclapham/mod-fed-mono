import React, { useState } from 'react';

const Button: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button
      onClick={() => setCount(prev => prev + 1)}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Remote Button (Clicked {count} times)
    </button>
  );
};

export default Button;