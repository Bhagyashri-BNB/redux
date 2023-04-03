import {createStore}from 'redux'
import rotateReducers from './reducers/rotateReducers'

function configureStore(state={rotating: true}){
    return createStore(rotateReducers, state);
}

export default configureStore;