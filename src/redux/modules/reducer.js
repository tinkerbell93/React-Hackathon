import schedule from './schedule'
import auth from './auth';
import darkmode from './darkmode'
import {
  combineReducers
} from 'redux';
import {
  connectRouter
} from 'connected-react-router';






const reducer = (history) => combineReducers({
  schedule,
  darkmode,
  router: connectRouter(history),
})

export default reducer;