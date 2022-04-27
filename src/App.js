import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keypressed: '',
    };
  }

  handleKeyPress = (e) => {
    console.log(e.key);
    this.setState(() => ({
      keypressed: e.key,
    }));

    console.log('current state', this.state);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className='App' onKeyDown={this.handleKeyPress}>
        <h1>
          Key Pressed: <span>{this.state.keypressed}</span>
        </h1>
      </div>
    );
  }
}
export default App;
