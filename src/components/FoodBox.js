import React, { Component } from 'react';
import './FoodBox.css';

const FoodBox = ({
  image,
  name,
  calories,
  quantity,
  addFood,
  handleInputChange,
}) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <form onSubmit={addFood}>
            <label>
              <input
                name={name}
                className="input"
                type="number"
                value={quantity}
                onChange={handleInputChange}
              />
            </label>
            <input type="submit" value="+" />
          </form>

          {/* <div className="field has-addons">
            <div className="control">
              <input name="quantity" className="input" type="number" />
            </div>
            <div className="control">
              <button className="button is-info" onClick={(e) => addFood(e)}>
                +
              </button>
            </div> 
          </div>*/}
        </div>
        <div></div>
      </article>
    </div>
  );
};

export default FoodBox;
