import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistedReducer from './reducers/index';
import Root from './components/Root';
import './index.css';

const store = createStore(persistedReducer, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
