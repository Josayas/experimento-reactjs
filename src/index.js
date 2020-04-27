import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './index.css';
import './libraries/bootstrap4/css/bootstrap.css';

import Reddit from './components/Reddit';
import Weather from './components/Weather';
import Cabecera from './components/Cabecera';
import Earthquakes from './components/Earthquakes';
import Coins from './components/Coins';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className="alert">
            <Cabecera />
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

