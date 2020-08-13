import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  createBrowserHistory
} from 'history';

import {
  routerMiddleware
} from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import {
  composeWithDevTools
} from 'redux-devtools-extension';

import reducer from './modules/reducer';
export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

export default function create() {

  return createStore(
    reducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )
}