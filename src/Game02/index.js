import React, { useReducer } from 'react';
import DefaultState from './data/State';
import Context from './data/context';
import reducer from './data/reducer';
import Header from './Header';
import Body from './Body';

// const useAnimationFrame = callback => {
//   // Use useRef for mutable variables that we want to persist
//   // without triggering a re-render on their change
//   const requestRef = React.useRef();
//   const previousTimeRef = React.useRef();
  
//   const animate = time => {
//     if (previousTimeRef.current !== undefined) {
//       const deltaTime = time - previousTimeRef.current;
//       callback(deltaTime)
//     }
//     previousTimeRef.current = time;
//     requestRef.current = requestAnimationFrame(animate);
//   }
  
//   React.useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []); // Make sure the effect runs only once
// }

const Game02 = () => {
  const [state, dispatch] = useReducer(reducer, DefaultState);
  // useAnimationFrame(deltaTime => console.log({deltaTime}));
  return (
    <Context.Provider value={[state, dispatch]}>
      <Header />
      <Body />
    </Context.Provider>
  );
};

export default Game02;