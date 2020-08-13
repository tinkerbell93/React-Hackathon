import ScheduleService from '../../services/ScheduleService';
import {
  put,
  call,
  takeEvery,
  select,
  delay,
  takeLatest,
  takeLeading
} from 'redux-saga/effects';

const prefix = 'my-project/schedule'


const initialState = {
  loading: false,
  schedule: [],
  error: null,
};


const GET_START = `${prefix}/GET_START`;
const GET_SUCCESS = `${prefix}/GET_SUCCESS`;
const GET_FAIL = `${prefix}/GET_FAIL`;

const startGetSchedule = () => {
  return {
    type: GET_START,

  }
}

const successGetSchedule = (schedule) => {
  return {
    type: GET_SUCCESS,
    schedule,
  }
}

const failGetSchedule = (err) => {
  return {
    type: GET_FAIL,
    err,
  }
}

function* getScheduleSaga() {
  // const token = yield select(state => state.auth.token);
  const token = sessionStorage.getItem('token');
  console.log('hi');
  yield put(startGetSchedule());
  try {
    const books = yield call(ScheduleService.getSchedule, token);
    yield put(successGetSchedule(books));
  } catch (err) {
    yield put(err);
  }
}

const GET_SCHEDULE_SAGA = 'GET_SCHEDULE_SAGA';
export const getScheduleSagaActionCreator = () => ({
  type: GET_SCHEDULE_SAGA,
})

export function* scheduleSaga() {
  yield takeLatest(GET_SCHEDULE_SAGA, getScheduleSaga);
}


export default function reducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_START:
      return {
        ...prevState,
        loading: true,
          error: null,
      }
      case GET_SUCCESS:
        return {
          loading: false,
            schedule: action.schedule,
            error: null,
        }
        case GET_FAIL:
          return {
            ...prevState,
            loading: true,
              error: action.err,
          }

          default:
            return prevState
  }
}