import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import img from './ferrari.jpg';

const App = () => {
    return (
        <div>
            <p>Hello React</p>
            <img src={img} alt="Ferrari" />
        </div>
    )
}

const el = document.getElementById("root");
ReactDOM.render(<App />, el);