import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

const App = () => {
    return (
        <div>
            <p>Hello React</p>
        </div>
    )
}

const el = document.getElementById("root");
ReactDOM.render(<App />, el);