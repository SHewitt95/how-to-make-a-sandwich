import React, { useContext } from 'react';
import { Context } from '../../context/GlobalState';

const SandwichList = () => {
  const [state] = useContext(Context);

  return (
    <>
      <section>
        <h4>Sandwich Inventory</h4>
        <p>Sandwiches with:</p>
        <ul>
          <li>... only Bread: {`${state.sandwichCountBread}`}</li>
        </ul>
        <p>Sandwiches with Bread, Condimentsß</p>
        <ul>
          <li>Condiments (Co): {`${state.sandwichCountCondiments}`}</li>
          <li>Vegetables (V): {`${state.sandwichCountVegetables}`}</li>
          <li>Cheese (Ch): {`${state.sandwichCountCheese}`}</li>
          <li>Meat (M): {`${state.sandwichCountMeat}`}</li>
        </ul>
        <ul>
          <li>Co and V: {`${state.sandwichCountCondiments}`}</li>
          <li>Co and Ch: {`${state.sandwichCountVegetables}`}</li>
          <li>Co and M: {`${state.sandwichCountCheese}`}</li>
        </ul>
        <ul>
          <li>V and Co: {`${state.sandwichCountCondiments}`}</li>
          <li>V and Ch: {`${state.sandwichCountVegetables}`}</li>
          <li>V and M: {`${state.sandwichCountCheese}`}</li>
        </ul>
        <ul>
          <li>Ch and Co: {`${state.sandwichCountCondiments}`}</li>
          <li>Ch and V: {`${state.sandwichCountVegetables}`}</li>
          <li>Ch and M: {`${state.sandwichCountCheese}`}</li>
        </ul>
        <ul>
          <li>M and Co: {`${state.sandwichCountCondiments}`}</li>
          <li>M and V: {`${state.sandwichCountVegetables}`}</li>
          <li>M and Ch: {`${state.sandwichCountCheese}`}</li>
        </ul>
      </section>
    </>
  );
};

export default SandwichList;
