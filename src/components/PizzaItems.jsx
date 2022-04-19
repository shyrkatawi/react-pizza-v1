import React from 'react';
import PizzaItem from './PizzaItem';

function PizzaItems({ pizzaItems }) {
  return (
    <div className="content__items">
      {pizzaItems.map((item) => (
        <PizzaItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default PizzaItems;
