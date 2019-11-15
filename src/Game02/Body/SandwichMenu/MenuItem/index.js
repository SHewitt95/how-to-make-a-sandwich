import React, { useContext } from 'react';
import Context from '../../../data/context';
import { Actions } from '../../../data/_utils/constants';

const MenuItem = ({ itemName }) => {
  const [, dispatch] = useContext(Context);
  return (
    <li>
      <button onClick={() => dispatch({ type: Actions.UPGRADE_MENU_ITEM, payload: 1, itemName })}>
        {itemName}
      </button>
    </li>
  );
};

export default MenuItem;