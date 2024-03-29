import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import mailReducer from './store/Reducers/mailReducer';

const store = createStore(
    combineReducers({
        letters: mailReducer
    }), applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
