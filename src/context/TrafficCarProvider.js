import React, { Component } from 'react';
import TrafficCarContext from './TrafficCarContext';

export default class TrafficCarProvider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(carColor) {
    this.setState({ cars: { ...this.state.cars, [carColor]: !this.state.cars[carColor] }});
  };

  changeSignal(signalColor) {
    this.setState({ signal: { color: signalColor }});
  }

  render() {
    const { children } = this.props;
    return (
      <TrafficCarContext.Provider value= { {
        ...this.state,
        moveCar: this.moveCar,
        changeSignal: this.changeSignal,
        } }>
        { children }
      </TrafficCarContext.Provider>
    )
  }
}
