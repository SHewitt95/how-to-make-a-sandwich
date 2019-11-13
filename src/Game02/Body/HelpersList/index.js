import React, { useRef, useEffect, useContext } from 'react';
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
  const [, dispatch] = useContext(Context);
  useInterval(() => {
    dispatch({ type: Actions.MAKE_SANDWICH });
  }, 100);
  return (
    <ol>
      <Helper />
    </ol>
  );
}

export default HelpersList;