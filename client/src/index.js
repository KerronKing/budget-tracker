import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import Root from './components/Root';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />,document.getElementById('root'));
