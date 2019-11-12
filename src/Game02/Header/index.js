import React, { useContext, useEffect } from 'react';
import Context from '../data/context';

const Header = () => {
  const [state] = useContext(Context);
  const { peopleCount } = state;

  useEffect(() => {
    document.title = `${peopleCount} people without a sandwich - how to make a sandwich`;
  }, [peopleCount])

  return (
    <header>
      <h1>how to make a sandwich</h1>
      <p>people without a sandwich: {peopleCount}</p>
    </header>
  );
}

export default Header;