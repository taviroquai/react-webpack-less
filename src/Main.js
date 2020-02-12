import React from 'react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './redux/store';

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
    
}

export default Main;