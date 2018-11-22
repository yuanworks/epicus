import React from 'react';
import '../../styles/layout/main_container.scss';

export const MainContainer = ({ children, theme }) => {
  return (
    <div className="__main-container">
      { children }
    </div>
  );
}
