import React from 'react';

const MenuItem = ({ itemName }) => {
  return (
    <li>
      <button>
        {itemName}
      </button>
    </li>
  );
};

export default MenuItem;