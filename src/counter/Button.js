import React from 'react';

const Button = (props) => {
  // Function w/ Conditional to add and subtract points
  const clickedBtn = () => {
    if (props.points == props.goal) {
      props.setGoal(props.points * 2);
    }
    if (props.value == 'plus') {
      props.setPoints(props.points + 1);
    } else {
      props.setPoints(props.points - 1);
    }
    console.log('clicked');
  };
  const mouseEnters = (e) => {
    console.log('Mouse went inside the button');
    console.log(e);
  };
  const mouseLeft = (e) => {
    console.log('Mouse left button');
    console.log(e);
  };
  return (
    <button
      className='counter__minus'
      onClick={clickedBtn}
      onMouseEnter={mouseEnters}
      onMouseLeave={mouseLeft}
    >
      {props.children}
    </button>
  );
};

export default Button;
