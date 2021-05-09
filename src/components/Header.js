import React from 'react';

export default function (props) {
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
}
