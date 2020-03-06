import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user_reducer';
import Root from './components/Root';
import './index.css';

const store = createStore(userReducer, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />,document.getElementById('root'));
