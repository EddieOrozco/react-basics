import React, { useState } from 'react';
import Button from './Button';
import Number from './Number';

const Counter = (props) => {
  // STATE to keep track of points
  const [points, setPoints] = useState(0);

  console.log(useState(0));
  return (
    <div className='counter'>
      <Number digit={points} />
      <div className='counter__buttons'>
        <Button points={points} setPoints={setPoints} value='minus'>
          -
        </Button>
        <Button points={points} setPoints={setPoints} value='plus'>
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
