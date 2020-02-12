import React from 'react';
import './style.less';
import img from './ferrari.jpg';

class Main extends React.Component {

    render() {
        return (
            <div>
                <p>Hello React</p>
                <img src={img} alt="Ferrari" />
            </div>
        )
    }
    
}

export default Main;