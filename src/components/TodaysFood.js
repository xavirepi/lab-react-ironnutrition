import React from 'react';
import uuid from 'react-uuid';
import './TodaysFood.css';

const TodaysFood = ({ foods }) => {
  let filteredFood = foods.filter((food) => {
    return food.added === true;
  });

  let totalCal;

  if (filteredFood.length > 0) {
    totalCal = filteredFood.reduce(
      (acc, val) => val.calories * val.quantity + acc,
      0
    );
  } else {
    totalCal = 0;
  }

  return (
    <div className="TodaysFood">
      {filteredFood.map((food, idx) => {
        return (
          <div key={uuid()}>
            <h1>
              {food.quantity} {food.name} = {food.quantity * food.calories}
            </h1>
          </div>
        );
      })}
      <div>
        Total Calories: <b>{totalCal}</b>
      </div>
    </div>
  );
};

export default TodaysFood;
