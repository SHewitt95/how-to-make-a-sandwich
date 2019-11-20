import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';
import { useAutoSandwichMaker } from '../hooks';

const SandwichButton = () => {
  const [, dispatch] = useContext(Context);
  useAutoSandwichMaker();
  return (
    <section className="makeSandwich-section">
      <Button variant="contained" onClick={() => dispatch({ type: Actions.MAKE_SANDWICH })}>make a sandwich</Button>
    </section>
  );
}

export default SandwichButton;