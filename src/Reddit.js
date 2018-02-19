import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './Loading'

class Reddit extends Component {
  constructor(props) {
    super(props)
    this.state = { kind: [] }
    this.url = "https://www.reddit.com/r/gifs/.json"
  }

  componentWillMount() {
    fetch(this.url)
      .then((response) => {
        return response.json()
      }).then((data) => {
        this.setState({ kind: data.data.children })
      })
  }


  render() {
    var redditList = this.state.kind.map(function (e) {
      return (
        <div className="card" style={style}>
          <h6><i class="fas fa-angle-right"></i> {e.data.title}</h6>
          <span className="text-truncate">{e.data.selftext}</span>
          <div className=" text-left"><a href={e.data.url} target="_blank">Read more...</a></div>
          <div className="font-italic text-right"> <i class="far fa-user"></i> {e.data.author}</div>
        </div>
      );
    });

    if (this.state.kind.length > 0) {
      return (
        <div>
          <h1>Reddit <i class="fab fa-reddit-alien"></i></h1>
          <div>Fuente : {this.url}</div>
          {redditList}
        </div>
      );
    } else {
      return <Loading name="reddit" />
    }
  }
}

var style = {
  margin: '20px 0',
  padding: '10px'
};

export default Reddit;
