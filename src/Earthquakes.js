import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './Loading'

class Earthquakes extends Component {
  constructor(props) {
    super(props)
    this.state = { earthquakes: [] }
    this.url = "https://gael.cl/api/sismos"
  }

  componentWillMount() {
    fetch(this.url)
      .then((response) => {
        return response.json()
      }).then((data) => {
        this.setState({ earthquakes: data })
      })
  }


  render() {
    var earthquakesList = this.state.earthquakes.map(function (e) {
      return (
        <div className="card" style={style}>
          <div className="row">
            <div className="col-8">
              <h6> <i className="fas fa-map-marker"></i> {e.RefGeografica}</h6>
              <div className="text-truncate">({e.Latitud} , {e.Longitud})</div>
              <div className="text-truncate" title="Última actualización"> <i className="far fa-clock"></i> {e.Fecha}</div>
            </div>
            <div className="col-4" style={{ fontSize: '30px' }}>
              <div className="text-truncate">{e.Magnitud}</div>
            </div>
          </div>
        </div>
      );
    });

    if (this.state.earthquakes.length > 0) {
      return (
        <div className="col-12 mx-auto">
          <h1>Sismos</h1>
          <div>Fuente : {this.url}</div>
          {earthquakesList}
        </div>
      );
    } else {
      return <Loading name="earthquakes" />
    }
    return "";
  }
}

var style = {
  margin: '20px 0',
  padding: '10px'
};


export default Earthquakes;
