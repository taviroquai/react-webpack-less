import { combineReducers } from 'redux';

const home = (state = {}, action) => {
    switch (action) {
        case "SET_INITIAL_STATE":
            state = {};
            break;
        default:;
    }
    return state;
}

export default combineReducers({
    home
});