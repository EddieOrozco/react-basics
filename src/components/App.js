import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Card from './Card';

export default function (props) {
  return (
    <>
      <Header>
        <Logo>Logo</Logo>
        <nav>
          <a href='#'>link</a>
          <a href='#'>link</a>
          <a href='#'>link</a>
        </nav>
      </Header>
      <main style={{ margin: '20px auto', width: '100%', maxWidth: '960px' }}>
        <div className='ui link cards'>
          <Card />
        </div>
      </main>
    </>
  );
}
