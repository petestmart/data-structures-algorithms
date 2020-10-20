import { combineReducers } from 'redux';

const stacksReducer = (state = [], action) => {
    console.log('in stacksReducer', action)
    if (action.type === 'SET_STACK'){
        return action.payload;
    }
    else {
        return state;
    }
}



export default stacksReducer;