import React from 'react';

const Header = (props) => {
  return (
    <header
      className='logo'
      style={{
        background: 'black',
        color: 'white',
        padding: '15px 20px',
      }}
    >
      {' '}
      {props.children}
    </header>
  );
};

export default Header;
