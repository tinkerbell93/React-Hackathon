import schedule from './schedule';
import auth from './auth';
import {
  combineReducers
} from 'redux';
import {
  connectRouter
} from 'connected-react-router';

const reducer = (history) =>
  combineReducers({
    schedule,
    auth,
    router: connectRouter(history),
  });




export default reducer;