import React from 'react';
import classnames from 'classnames';

import '../../styles/layout/main_container.scss';

export const MainContainer = ({ children, theme }) => {
  return (
    <section className={ classnames('__main-container', {[`theme-${theme}`]: theme}) }>
      <div className='__main-container-inner'>
        { children }
      </div>
    </section>
  );
}
