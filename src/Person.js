import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';

class Person extends Component {
  render() {
    return (
      <div className="card" style={style}>
        <h1>{this.props.name}</h1>
        <img className="img-responsive" src={this.props.img} alt="logo" width="100px" />
      </div>
    );
  }
}

var style = {
  margin: '20px',
  padding: '10px'
};

export default Person;
