import React, { Component } from 'react';
import './App.css';
import Togglebutton from './Togglebutton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    };
  }

  handleClick = e => {
    let status = this.state.on;
    status = status ? false : true;
    const newState = {
      ...this.state
    };
    newState.on = status;
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <h1>Toggle {this.state.on ? 'on' : 'off'}</h1>

        <Togglebutton status={this.state} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
