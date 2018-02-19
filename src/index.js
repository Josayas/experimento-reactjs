import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './index.css';
import './libraries/bootstrap4/css/bootstrap.css';
import Reddit from './Reddit';
import Weather from './Weather';
import Earthquakes from './Earthquakes';
import Coins from './Coins';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className="alert">
            <div className="text-center ">
                <Link to="/">
                    <span className="btn btn-success" style={{ margin: '2px 5px' }}>Clima</span>
                </Link>
                <Link to="/earthquakes">
                    <span className="btn btn-success" style={{ margin: '2px 5px' }}>Sismos</span>
                </Link>
                <Link to="/coins">
                    <span className="btn btn-success" style={{ margin: '2px 5px' }}>Monedas</span>
                </Link>
                <Link to="/reddit">
                    <span className="btn btn-success" style={{ margin: '2px 5px' }}>Reddit</span>
                </Link>
            </div>

            <hr />

            <Route exact path="/" component={Weather} />
            <Route exact path="/coins" component={Coins} />
            <Route exact path="/reddit" component={Reddit} />
            <Route exact path="/earthquakes" component={Earthquakes} />

            <hr />
            <footer className="text-center" style={{ color: 'gray', fontSize: '50px' }}>
                <a style={{ color: 'gray' }} href="https://github.com/Ganthas/experimento-reactjs" target="_blank" ><i className="fab fa-github"></i></a>
                <i className="fab fa-react"></i>
            </footer>
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();

