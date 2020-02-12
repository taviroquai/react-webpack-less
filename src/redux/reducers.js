import { combineReducers } from 'redux';

const home = (state = { hello: 'World' }, action) => {
    
    switch (action.type) {
        case "say_hi":
            return { hello: 'Redux' };
            
        default:;
    }
    return state;
}

export default combineReducers({
    home
});