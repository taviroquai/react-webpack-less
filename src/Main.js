import React from 'react';
import './style.less';
import img from './ferrari.jpg';
import { Provider } from 'react-redux';
import store from './redux/store';

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <p>Hello React</p>
                    <img src={img} alt="Ferrari" />
                </div>
            </Provider>
        )
    }
    
}

export default Main;