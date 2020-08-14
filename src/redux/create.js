import { createStore, applyMiddleware } from 'redux';

import { createBrowserHistory } from 'history';

import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './modules/reducer';
import TokenService from '../services/TokenService';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

export default function create() {
  const token = TokenService.get();
  return createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );
}
