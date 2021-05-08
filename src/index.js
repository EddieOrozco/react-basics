import React from 'react';
import ReactDOM from 'react-dom';

// Setting Variables
let name = 'Eddie';
let lname = ' Orozco';
let fullName = name + lname;
let age = 29;
let loggedIn = false;
let width = 400;
let height = 300;
let styles = {
  box: {
    background: 'red',
    color: '#fff',
    textAlign: 'center',
    width: `${(width * 3) / 2}px`,
    height: `${height}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    background: 'black',
    width: '100px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.8rem',
  },
};

const App = () => {
  // Functions
  let showAccount = () => {
    return <div>You are logged in</div>;
  };
  return (
    <>
      <div style={styles.box} className='box-main'>
        {/* Conditionals (Ternary) */}
        Welcome {fullName} you age is {age}
        {loggedIn ? showAccount() : ''}
        <h1 style={styles.h1} className='main-box'>
          Testing
        </h1>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
