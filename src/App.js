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
          <h2>How&rsquo;s the vibe today?</h2>
          <Counter />
        </div>
        
        <div className="footer">          
          <ToggleAbout />
          <a href="http://madisonhardt.com" alt="Madison Hardt" target="_blank" rel="noopener noreferrer"><img alt="Smiley" src="favicon.png"></img></a>
        </div>

      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: parseInt(localStorage.getItem("count")) || 0
    };
  }

  updateCount(newCount) {
    this.setState({
        count: newCount
    });
    localStorage.setItem("count", newCount);
  }

  increment() {
    this.updateCount(this.state.count + 1)
  };
  
  decrement() {
    this.updateCount(this.state.count - 1);
  };

  reset() {
    this.updateCount(0);
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
  state = { 
    show: false 
  }

  showModal = () => {
    this.setState({show:true});
  }
  hideModal = () => {
    this.setState({show:false})
  }
  render () {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div className="definition">
            <h2>&ldquo;Vibe Check&rdquo;</h2>
            <p>/vīb CHek/ <em>verb</em></p>
            <p>A spontaneous and usually random time where someone checks your vibe. [<a href="https://www.urbandictionary.com/define.php?term=Vibe%20Check" target="_blank" rel="noopener noreferrer">source</a>]</p>
          </div>

          <div className="credits">
            <p>Built with React and CSS by <a href="http://madisonhardt.com" alt="Madison Hardt" target="_blank" rel="noopener noreferrer">Madison Hardt</a>. She can be found on <a href="https://twitter.com/madisonmonteze" alt="@madisonmonteze" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://github.com/madisonmonteze" alt="Github" target="_blank" rel="noopener noreferrer">Github</a>, and by email at <a href="mailto:madison.hardt@hey.com" alt="madison.hardt@hey.com" target="_blank" rel="noopener noreferrer">madison.hardt@hey.com</a>.</p>
          </div>
        </Modal>
        <button type='button' onClick={this.showModal}>About</button>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className='modal-top'>
          <button onClick={handleClose}>Close</button>
        </div>
        <div className='modal-bottom'>
          {children}
        </div>
      </section>
    </div>
  );
};

export default App;
