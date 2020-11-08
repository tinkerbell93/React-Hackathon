import UserService from '../../services/UserService';
import TokenService from '../../services/TokenService';
import { push } from 'connected-react-router';
import {
  takeEvery,
  put,
  delay,
  call,
  takeLeading,
  select,
} from 'redux-saga/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
import { message } from 'antd';

const prefix = 'my-project/auth';

const { start, success, fail } = createActions(
  {
    SUCCESS: (token) => ({ token }),
  },
  'START',
  'FAIL',
  { prefix }
);

// initial state
const initialState = {
  token: null,
  loading: false,
  error: null,
};

// reducer
const reducer = handleActions(
  {
    START: () => ({
      loading: true,
      token: null,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      loading: false,
      token: action.payload.token,
      error: null,
    }),
    FAIL: (state, action) => ({
      loading: false,
      token: null,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);
export default reducer;

// saga
const START_LOGIN_SAGA = `${prefix}/START_LOGIN_SAGA`;
const START_LOGOUT_SAGA = `${prefix}/START_LOGOUT_SAGA`;

export const startLoginSagaActionCreator = createAction(
  START_LOGIN_SAGA,
  (email, password) => ({ email, password })
);

export const startLogoutActionCreator = createAction(START_LOGOUT_SAGA);

function* startLoginSaga(action) {
  const { email, password } = action.payload;
  try {
    yield put(start());
    yield delay(1000);
    const token = yield call(UserService.login, email, password);
    TokenService.save(token);
    yield put(success(token));
    yield put(push('/'));
  } catch (error) {
    yield put(fail(error));
    const errorCode = error?.response?.data?.error || 'NOT_MATCH';
    if (errorCode === 'PASSWORD_NOT_MATCH') {
      message.error('Password not match');
    } else if (errorCode === 'USER_NOT_EXIST') {
      message.error('User not exist');
    } else {
      message.error("We don't know message");
    }
  }
}

function* startLogoutSaga() {
  const token = yield select((state) => state.auth.token);
  TokenService.clear();
  yield put(success(null));
  yield put(push('/signin'));
  try {
    yield call(UserService.logout, token);
  } catch (error) {}
}

export function* authSaga() {
  yield takeEvery(START_LOGIN_SAGA, startLoginSaga);
  yield takeLeading(START_LOGOUT_SAGA, startLogoutSaga);
}
