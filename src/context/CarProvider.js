import React, { Component } from 'react';
import CarContext from './CarContext';

export default class CarProvider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(carColor) {
    this.setState({ cars: { [carColor]: !this.state.cars[carColor] }});
  };

  render() {
    const { children } = this.props;
    return (
      <CarContext.Provider value= { { ...this.state, moveCar: this.moveCar } }>
        { children }
      </CarContext.Provider>
    )
  }
}
