import React, { useState, useContext } from 'react';
import { Context, Actions } from '../context/GlobalState';

const Header = () => {
  const [inputValue, changeInput] = useState('');
  const [state, dispatch] = useContext(Context);
  return (
    <header>
      {!state.username && <form onSubmit={event => {
        event.preventDefault();
        dispatch({ type: Actions.UPDATE_NAME, payload: inputValue });
        dispatch({ type: Actions.ACTIVATE_GAME, payload: true });
      }}>
        <label>Who is the business owner?</label>
        <input required={true} onChange={event => changeInput(event.target.value)} value={inputValue} placeholder="Enter your name here" />
        <button>Open for business!</button>
      </form>}
      {state.username && <h2>{`${state.username}'s Sandwich Shop`}</h2>}
    </header>
  )
};

export default Header;