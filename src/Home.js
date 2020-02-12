import React from 'react';
import './style.less';
import img from './ferrari.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        
        // Say hi!
        const action = dispatch => {
            setTimeout(() => {
                dispatch({ type: "say_hi" })
            }, 1000);
        }
        dispatch(action);
    }

    render() {
        return (
            <div>
                <p>Hello { this.props.hello }</p>
                <img src={img} alt="Ferrari" />
            </div>
        )
    }
    
}

export default connect(state => state.home)(Home);