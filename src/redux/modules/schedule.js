import ScheduleService from "../../services/ScheduleService";
import {
  put,
  call,
  takeEvery,
  select,
  delay,
  takeLatest,
<<<<<<< HEAD
  takeLeading,
} from "redux-saga/effects";
=======
  takeLeading
} from 'redux-saga/effects';
import TokenService from '../../services/TokenService';

const prefix = 'my-project/schedule'
>>>>>>> e79cab4ad2e59c0575873d657989e94731858017

const prefix = "my-project/schedule";

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
  };
};

const successGetSchedule = (schedule) => {
  return {
    type: GET_SUCCESS,
    schedule,
  };
};

const failGetSchedule = (err) => {
  return {
    type: GET_FAIL,
    err,
  };
};

function* getScheduleSaga() {
  // const token = yield select(state => state.auth.token);
<<<<<<< HEAD
<<<<<<< HEAD
  const token = sessionStorage.getItem("token");
  console.log("hi");
=======
  const token = localStorage.getItem('token');
  console.log('hi');
>>>>>>> 9a0136527083589f9cc6af104ff7729322328184
=======
  const token = TokenService.get();
>>>>>>> e79cab4ad2e59c0575873d657989e94731858017
  yield put(startGetSchedule());
  try {
    const books = yield call(ScheduleService.getSchedule, token);
    yield put(successGetSchedule(books));
  } catch (err) {
    yield put(err);
  }
}

const GET_SCHEDULE_SAGA = "GET_SCHEDULE_SAGA";
export const getScheduleSagaActionCreator = () => ({
  type: GET_SCHEDULE_SAGA,
});

const ADD_START = `${prefix}/ADD_START`;
const ADD_SUCCESS = `${prefix}/ADD_SUCCESS`;
const ADD_FAIL = `${prefix}/ADD_FAIL`;

const startAddSchedule = (schedule) => {
  return {
    type: ADD_START,
    schedule,
  };
};

const successAddSchedule = (schedule) => {
  return {
    type: ADD_SUCCESS,
    schedule,
  };
};

const failAddSchedule = (err) => {
  return {
    type: ADD_FAIL,
    err,
  };
};

function* addScheduleSaga(action) {
  const { schedule } = action.payload;
  const token = yield select((state) => state.auth.token);
  yield put(startAddSchedule());
  try {
    yield delay(1500);
    yield call(ScheduleService.addSchedule, token, schedule);
    const schedules = yield call(ScheduleService.addSchedule, token);
    yield put(successAddSchedule(schedules));
  } catch (err) {
    yield put(err);
  }
}

const ADD_SCHEDULE_SAGA = "ADD_SCHEDULE_SAGA";
export const addScheduleSagaActionCreator = (schedule) => ({
  type: ADD_SCHEDULE_SAGA,
  payload: {
    schedule,
  },
});

export function* scheduleSaga() {
  yield takeLatest(GET_SCHEDULE_SAGA, getScheduleSaga);
  yield takeEvery(ADD_SCHEDULE_SAGA, addScheduleSaga);
}

export default function reducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_START:
      return {
        ...prevState,
        loading: true,
        error: null,
      };
    case GET_SUCCESS:
      return {
        loading: false,
        schedule: action.schedule,
        error: null,
      };
    case GET_FAIL:
      return {
        ...prevState,
        loading: true,
        error: action.err,
      };
    case ADD_START:
      return {
        ...prevState,
        loading: true,
        error: null,
      };
    case ADD_SUCCESS:
      return {
        loading: false,
        schedule: action.schedule,
        error: null,
      };
    case ADD_FAIL:
      return {
        ...prevState,
        loading: true,
        error: action.err,
      };
    default:
      return prevState;
  }
}
