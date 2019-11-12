import React, { useContext } from 'react';
import Context from '../data/context';

const Header = () => {
  const [state] = useContext(Context);
  return (
    <header>
      <h1>How To Make A Sandwich</h1>
      <p>Sandwiches: {state.sandwichCount}</p>
    </header>
  );
}

export default Header;