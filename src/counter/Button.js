import React from 'react';

const Button = (props) => {
  // Function w/ Conditional to add and subtract points
  const clickedBtn = () => {
    if (props.value == 'plus') {
      props.setPoints(props.points + 1);
    } else {
      props.setPoints(props.points - 1);
    }

    console.log('clicked');
  };
  return (
    <button className='counter__minus' onClick={clickedBtn}>
      {props.children}
    </button>
  );
};

export default Button;
