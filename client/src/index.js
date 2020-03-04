import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import Root from './components/Root';
import './index.css';

const store = createStore(rootReducer);

render(<Root store={store} />, document.getElementById('root'));
