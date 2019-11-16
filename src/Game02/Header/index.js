import React, { useContext, useEffect } from 'react';
import Timer from './Timer';
import Context from '../data/context';
import { numberWithCommas } from '../Body/helpers';

const Header = () => {
  const [state] = useContext(Context);
  const { peopleCount } = state;
  const flooredCount = Math.floor(peopleCount);

  useEffect(() => {
    document.title = `${numberWithCommas(flooredCount)} people without a sandwich - how to make a sandwich`;
  }, [flooredCount])

  return (
    <header>
      <h1>how to make a sandwich</h1>
      <p>Goal: Make a sandwich for everyone. Literally.</p>
      <Timer />
      <p>People without a sandwich: {numberWithCommas(flooredCount)}</p>
    </header>
  );
}

export default Header;