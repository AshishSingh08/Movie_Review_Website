import React from 'react';

const NotFoundStyle = {
  color: 'var(--white)',
  fontSize: 'var(--fontSuperBig)',
  display: 'flex',
  justifyContent: 'center',
  margin: '310px',
};

const NotFound = () => {
  return (
    <div style={NotFoundStyle}>Page Not Found</div>
  )
};

export default NotFound;
