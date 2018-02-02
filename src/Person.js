import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = { kind: [] }
  }

  componentWillMount() {
    fetch('https://www.reddit.com/r/gifs/.json')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({kind: data.data.children})
    })
  }

  
  render() {
    var redditList = this.state.kind.map(function(e){
      return (
        <div className="card" style={style}>
          <h6>{e.data.title}</h6>
          <span className="text-truncate">{e.data.selftext}</span>
          {/* <img className="img-responsive" src={this.props.img} alt="logo" width="100px" /> */}
          <div className=" text-left"><a href={e.data.url} target="_blank">Read more...</a></div>
          <div className="font-italic text-right">{e.data.author}</div>
        </div>
      );
    });

    if (this.state.kind.length > 0) {
      return (
        <div>
          {redditList}
        </div>
      );
    }else{
      return <p className="text-center">Cargando reddit...</p>
    }
  }
}

var style = {
  margin: '20px',
  padding: '10px'
};

export default Person;
