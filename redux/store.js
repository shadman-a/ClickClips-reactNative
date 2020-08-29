import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


const composedEnhancer = compose(applyMiddleware(thunk));

const store = () => createStore(rootReducer, composedEnhancer);

export default store