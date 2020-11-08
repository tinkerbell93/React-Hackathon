import ScheduleService from "../../services/ScheduleService";
import {
  put,
  call,
  takeEvery,
  select,
  delay,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";

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
  const token = localStorage.getItem("token");
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
  const {
    schedule
  } = action.payload;
  const token = yield select((state) => state.auth.token);
  yield put(startAddSchedule());
  try {
    yield call(ScheduleService.addSchedule, token, schedule);
    const schedules = yield call(ScheduleService.getSchedule, token);
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

//edit

const EDIT_START = `${prefix}/EDIT_START`;
const EDIT_SUCCESS = `${prefix}/EDIT_SUCCESS`;
const EDIT_FAIL = `${prefix}/EDIT_FAIL`;

const startEditSchedule = (schedule) => {
  return {
    type: EDIT_START,
    schedule,
  };
};

const successEditSchedule = (schedule) => {
  return {
    type: EDIT_SUCCESS,
    schedule,
  };
};

const failEditSchedule = (err) => {
  return {
    type: EDIT_FAIL,
    err,
  };
};

function* editScheduleSaga(action) {
  const {
    scheduleId,
    schedule
  } = action.payload;
  const token = yield select((state) => state.auth.token);
  yield put(startAddSchedule());
  try {
    yield call(ScheduleService.editSchedule, token, scheduleId, schedule);
    const schedules = yield call(ScheduleService.getSchedule, token);
    yield put(successAddSchedule(schedules));
  } catch (err) {
    yield put(err);
  }
}

const EDIT_SCHEDULE_SAGA = "EDIT_SCHEDULE_SAGA";
export const editScheduleSagaActionCreator = (scheduleId, schedule) => ({
  type: EDIT_SCHEDULE_SAGA,
  payload: {
    scheduleId,
    schedule,
  },
});

//

export function* scheduleSaga() {
  yield takeLatest(GET_SCHEDULE_SAGA, getScheduleSaga);
  yield takeLeading(EDIT_SCHEDULE_SAGA, editScheduleSaga);
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
    case EDIT_START:
      return {
        ...prevState,
        loading: true,
          error: null,
      }
      case EDIT_SUCCESS:
        return {
          schedule: action.schedule,
            loading: false,
            error: null,
        }
        case EDIT_FAIL:
          return {
            ...prevState,
            loading: false,
              error: action.err,
          }
          default:
            return prevState;
  }
}