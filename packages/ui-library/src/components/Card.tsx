import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      {title && (
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '8px',
            borderBottom: '1px solid #eee',
            paddingBottom: '8px'
          }}
        >
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;