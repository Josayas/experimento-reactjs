import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';

class Loadgin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <p className="text-center"> <i className="fa fa-sync-alt fa-spin"></i> Loading {this.props.name}...</p>
    }
}



export default Loadgin;
