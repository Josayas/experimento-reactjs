import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loading from '../Loading'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = { weather: [] }
    this.url = "https://gael.cl/api/clima"
  }

  componentWillMount() {
    fetch(this.url)
      .then((response) => {
        return response.json()
      }).then((data) => {
        this.setState({ weather: data })
      })
  }


  render() {
    var weatherList = this.state.weather.map(function (e) {
      var icono = "/weather-img/" + e.Icono + ".svg"
      return (
        <div className="card" style={style}>
          <div className="row">
            <div className="col-8">
              <h6> <i className="fas fa-map-marker"></i> {e.Estacion} <i className="far fa-clock"></i> {e.HoraUpdate}</h6>

              <div className="text-truncate">{e.Humedad}% humedad</div>
            </div>
            <div className="col-4" style={{ fontSize: '30px' }}>
              <div className="text-truncate">{e.Temp}°C <img src={icono} width="30px" /></div>

            </div>
          </div>
        </div>
      );
    });

    if (this.state.weather.length > 0) {
      return (
        <div>
          <h1>Clima</h1>
          <label>Fuente : {this.url}</label>
          <div className="">
            {weatherList}
          </div>
        </div>
      );
    } else {
      return <Loading name="weather" />
    }
    return "";
  }
}

var style = {
  margin: '20px 0',
  padding: '10px'
};


export default Weather;
