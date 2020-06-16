import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Vibe Checker</h1>
        </div>
      
        <div className="counter-section">
          <h2>How's the vibe today?</h2>
          <Counter />
        </div>

        <div className="footer">
          <a href="#">About</a>
        </div>
      
        
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset() {
    this.setState({
      count: 0
    });
  };

  render() {
    return (

   <div className="counter">
      
      <div className="counter-buttons">
        <button className='inc' onClick={(e) => this.increment(e)}>Good vibes</button>
        <button className='dec' onClick={(e) => this.decrement(e)}>Not-so-good vibes</button>
        <button className='reset' onClick={(e) => this.reset(e)}>Reset the vibes</button>
      </div>

      <p>Current vibe count: {this.state.count}</p>
  </div>
    );
  }
};

export default App;