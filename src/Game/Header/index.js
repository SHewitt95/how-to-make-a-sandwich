import React, { useState } from 'react';

const Header = () => {
  const [inputValue, changeInput] = useState('');
  return (
    <header>
      <form onSubmit={event => {
        event.preventDefault();
        console.log(inputValue)
      }}>
        <label>Who is the business owner?</label>
        <input required={true} onChange={event => changeInput(event.target.value)} value={inputValue} placeholder="Enter your name here" />
        <button>Open for business!</button>
      </form>
    </header>
  )
};

export default Header;