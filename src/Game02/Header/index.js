import React, { useContext, useEffect } from 'react';
import Context from '../data/context';

const Header = () => {
  const [state] = useContext(Context);
  const { sandwichCount } = state;

  useEffect(() => {
    document.title = `${sandwichCount} sandwich${sandwichCount === 1 ? '' : 'es'} - how to make a sandwich`;
  }, [sandwichCount])

  return (
    <header>
      <h1>how to make a sandwich</h1>
      <p>sandwiches: {sandwichCount}</p>
    </header>
  );
}

export default Header;