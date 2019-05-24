import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import List from './components/List'
import { increment, decrement } from './actions/actionCreator';

class App extends React.Component {

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <List number={this.props.count} />
          <div> 
            <button style={{padding: '4px 13px'}} onClick={this.decrement}>-</button>
            <button style={{padding: '4px 10px'}} onClick={this.increment}>+</button>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(function(state) {
  return {
    count: state.count
  }
}, { increment, decrement })(App);
