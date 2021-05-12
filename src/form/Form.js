import React, { useState } from 'react';

const Form = (props) => {
  const [fname, setFname] = useState('');
  const [showError, setShowError] = useState(false);
  // Events
  const formSubmitted = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  const handleChange = (e) => {
    // console.log(e)
    setFname(e.target.value);
    console.log(e.target.value);
  };

  const checkString = () => {
    if (fname.length < 5) {
      setShowError(true);
    }
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={formSubmitted}
    >
      <label htmlFor='fname'>Full Name</label>
      <input
        type='text'
        id=''
        name='fname'
        value={fname}
        onChange={handleChange}
        onFocus={() => setShowError(false)}
        onBlur={() => checkString()}
      />
      <div className={`error-message ${showError ? 'show' : ''}`}>
        Please fill in your full name
      </div>
      <button type='submit'>Save</button>
    </form>
  );
};

export default Form;
