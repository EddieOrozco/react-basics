import React, { useState, useEffect } from 'react';
import Button from './Button';
import Number from './Number';

const Counter = (props) => {
  // STATE to keep track of points
  const [points, setPoints] = useState(0);
  const [goal, setGoal] = useState(11);
  useEffect(() => {
    console.log(
      'This one runs every single time the screen re-renders or any time data changes.'
    );
    console.log('A');
  });
  useEffect(() => {
    console.log('This one will only run on first render. The array is empty.');
    console.log('B');
  }, []);
  useEffect(() => {
    console.log('This one runs when goal changes. The arrays is set to goal.');
    console.log('C');
  }, [goal]);

  console.log(useState(0));
  return (
    <div className='counter'>
      <Number digit={points} />
      <div className='counter__buttons'>
        <Button
          points={points}
          setPoints={setPoints}
          value='minus'
          goal={goal}
          setGoal={setGoal}
        >
          -
        </Button>
        <Button
          points={points}
          setPoints={setPoints}
          value='plus'
          goal={goal}
          setGoal={setGoal}
        >
          +
        </Button>
        Goal {goal}
      </div>
    </div>
  );
};

export default Counter;
