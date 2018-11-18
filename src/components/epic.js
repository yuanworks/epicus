import React from 'react';

const Epic = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

export default Epic;