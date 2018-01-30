import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './index.css';
import './libraries/bootstrap4/css/bootstrap.css';
import Person from './Person';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="">
    <div className="alert alert-primary" role="alert">
        First proyect and build in Apache ! it's great... cool.
    </div>
    <div className="row">
        <Person name="Nombre1" img={logo} />
        <Person name="Nombre2" img={logo} />
        <Person name="Nombre3" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
        <Person name="Nombre4" img={logo} />
    </div>
</div>, document.getElementById('root'));
registerServiceWorker();
