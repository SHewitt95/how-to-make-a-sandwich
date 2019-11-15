import React, { useRef, useEffect, useContext, useState } from 'react';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';
import Helper from './Helper';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const HelpersList = () => {
  // https://stackoverflow.com/questions/6509106/is-there-a-way-to-break-a-list-into-columns
  // const [, dispatch] = useContext(Context);
  // const [accumulatedSandwich, setAccumulatedSandwich] = useState(0.0);

  // useInterval(() => {
  //     setAccumulatedSandwich(accumulatedSandwich + (100000/100)); // 1000 needs to be the rate at which sandwich is made per second. Sum of toppings + helpers
  //     if (accumulatedSandwich >= 1.0) {
  //       dispatch({ type: Actions.MAKE_SANDWICH, payload: Math.floor(accumulatedSandwich) });
  //       setAccumulatedSandwich(accumulatedSandwich - 1);
  //     }
  // }, 10);
  return (
    <ol>
      <Helper />
    </ol>
  );
}

export default HelpersList;