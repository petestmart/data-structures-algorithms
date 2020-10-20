import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postStack(action){
    console.log('in postStack', action.payload)
    try {
        const postStacksResponse = yield axios.post(`/api/stacks`, action.payload);
        console.log(`postStacksResponse`, postStacksResponse)
        yield put({ type: 'GET_STACK'})
     } catch (error){
         console.log('error in postStack', error)
     }
} // end postStack

function* getStack(action) {
    console.log('in getStack');
    try {
        const stackResponse = yield axios.get(`/api/stacks`)
        console.log('getStack Response:', stackResponse.data);
        yield put({ type: 'SET_STACK', payload: stackResponse.data })
    } catch (error) {
        console.log('error in getStack', error);
    }
} // end getStack

// Watcher Saga
function* stacksSaga() {
    yield takeLatest('POST_STACK', postStack)
    yield takeLatest('GET_STACK', getStack)
} // end Watcher Saga stacksSaga

export default stacksSaga;