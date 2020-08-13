import {
  all
} from 'redux-saga/effects';

import {
  scheduleSaga
} from '../modules/schedule'



export default function* rootSaga() {
  //어떤 액션에 반응하는 어떤 비동기 로직들
  yield all([scheduleSaga()]);
}