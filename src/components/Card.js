import React from 'react';

export default function (props) {
  return (
    <div className='card'>
      <div className='image'>
        <img
          src='https://learn.g2.com/hubfs/What_is_Information_Technology.jpg'
          alt=''
        />
      </div>
      <div className='content'>
        <div className='header'>Matt Giampietro</div>
        <div className='meta'>
          <a href='#'>Friends</a>
        </div>
        <div className='description'>
          Matthew is an interior designer living in New York.
        </div>
      </div>
      <div className='extra content'>
        <span className='right floated'>Joined in 2013</span>
        <span>
          <i className='user icon' />
          75 Friends
        </span>
      </div>
    </div>
  );
}
