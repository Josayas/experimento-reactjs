import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loading from '../Loading'

class Coins extends Component {
    constructor(props) {
        super(props)
        this.state = { coins: [] }
        this.url = "https://gael.cl/api/monedas"
    }

    componentWillMount() {
        fetch(this.url)
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({ coins: data })
            })
    }


    render() {
        var coinsList = this.state.coins.map(function (e) {
            if (e.Valor != "ND") {
                return (
                    <div className="card" style={style}>
                        <div className="row">
                            <div className="col-8">
                                <h6>{e.Nombre}</h6>
                            </div>
                            <div className="col-4" style={{ fontSize: '30px' }}>
                                <span className="text-truncate">{e.Valor}</span>
                            </div>
                        </div>

                    </div>
                );
            }
        });

        if (this.state.coins.length > 0) {
            return (
                <div className="col-12 mx-auto">
                    <h1>Monedas</h1>
                    <div>Fuente : {this.url}</div>
                    {coinsList}
                </div>
            );
        } else {
            return <Loading name="coins" />
        }
        return "";
    }
}

var style = {
    margin: '20px 0',
    padding: '10px'
};


export default Coins;
