import React, { useContext, useEffect } from 'react';
import Timer from './Timer';
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
      <p>Goal: Make a sandwich for everyone. Literally.</p>
      <Timer />
      <p>people without a sandwich: {peopleCount}</p>
    </header>
  );
}

export default Header;