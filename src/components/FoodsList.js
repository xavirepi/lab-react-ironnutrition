import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import TodaysFood from './TodaysFood';
import foods from '../foods.json';
import uuid from 'react-uuid';
import './FoodsList.css';

class FoodsList extends Component {
  state = {
    foods: [...foods],
    searchInput: '',
    filtered: [],
  };

  increaseQuantity = (e) => {
    console.log(e);
    e.preventDefault();
    const name = e.target.name;
    this.setState((prevState) => ({
      foods: prevState.foods.map((food) =>
        food.name === name ? { ...food, added: true } : food
      ),
    }));

    // this.setState((prevState) => ({
    //   foods: prevState.foods.map((food) =>
    //     food.name === name
    //       ? { ...food, quantity: food.quantity + 1, added: true }
    //       : food
    //   ),
    // }));
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState) => ({
      foods: prevState.foods.map((food) =>
        food.name === name ? { ...food, quantity: value } : food
      ),
    }));
  };

  handleInputSearch = (event) => {
    this.setState({ searchInput: event.target.value });
    let searchedFoods = this.state.foods.filter((food) =>
      food.name.includes(event.target.value)
    );
    this.setState({
      filtered: searchedFoods,
    });
    // return searchedFoods
    console.log(this.state.filtered);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      foods: [...foods],
    });
  };

  render() {
    const allFoods = this.state.foods;

    return (
      <div className="FoodList">
        <form className="p-3 m-3" onSubmit={this.handleSubmit}>
          <input
            className="input mb-2"
            value={this.state.searchInput}
            type="search"
            onChange={(e) => this.handleInputSearch(e)}
          />
        </form>
        <div className="ui-wrapper">
          <div className="allFoods">
            {allFoods.map((food, idx) => {
              return (
                <FoodBox
                  key={uuid()}
                  {...food}
                  addFood={(e) => this.increaseQuantity(e)}
                  handleInputChange={(e) => this.handleInputChange(e)}
                />
              );
            })}
          </div>
          <TodaysFood foods={allFoods} />
        </div>
      </div>
    );
  }
}

export default FoodsList;
