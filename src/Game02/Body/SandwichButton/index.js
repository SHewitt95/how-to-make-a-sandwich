import React, { useContext } from 'react';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';
import { useAutoSandwichMaker } from '../hooks';

const SandwichButton = () => {
  const [, dispatch] = useContext(Context);
  useAutoSandwichMaker();
  return (
    <section className="makeSandwich-section">
      <button id="makeSandwich" onClick={() => dispatch({ type: Actions.MAKE_SANDWICH })}>make a sandwich</button>
    </section>
  );
}

export default SandwichButton;