import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

const style = {
    margin: '2px 5px'
}
class Cabecera extends Component {

    render() {
        return (
            <div>
                <div className="text-center ">
                    <Link to="/">
                        <span className="btn btn-success" style={style}>Clima</span>
                    </Link>
                    <Link to="/earthquakes">
                        <span className="btn btn-success" style={style}>Sismos</span>
                    </Link>
                    <Link to="/coins">
                        <span className="btn btn-success" style={style}>Monedas</span>
                    </Link>
                    <Link to="/reddit">
                        <span className="btn btn-success" style={style}>Reddit</span>
                    </Link>
                </div>
            </div>);
    };
}

export default Cabecera;
