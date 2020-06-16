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
          <ToggleAbout />
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

      <p className="counter-box">Current vibe count: {this.state.count}</p>
  </div>
    );
  }
};

class ToggleAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    
    this.toggleVisibility=this.toggleVisibility.bind(this);
  }

  toggleVisibility(){
    this.setState({
    visibility: !this.state.visibility
  })
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div className="about-slider">
          <button onClick={this.toggleVisibility}>Close</button>
          <div className="about-content">
            <p>This site was built with React.js and CSS by Madison Monteze. She can be found on <a href="https://twitter.com/madisonmonteze" alt="@madisonmonteze" target="_blank">Twitter</a>, <a href="https://github.com/madisonmonteze" alt="my github" target="_blank">Github</a>, and by email at <a href="mailto:madisonmonteze@gmail.com" alt="email me" target="_blank">madisonmonteze@gmail.com</a>.</p>
            <p>Good vibes only!!!</p>
          </div>
          
        </div>
      );
    } else {
      return (
        <div className="open-button">
          <button onClick={this.toggleVisibility}>About</button>
        </div>
      );
    }
  }
};

export default App;