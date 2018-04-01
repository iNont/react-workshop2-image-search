import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './index.css';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './features/search/redux';
import Search from './features/search/Search';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    promiseMiddleware()
  ))
);

ReactDOM.render((
  <Provider store={store}>
    <Search />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
