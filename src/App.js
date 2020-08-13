import React from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css'

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Route, Switch } from 'react-router-dom';



//pages
// import Signin from './pages/Signin'

import ScheduleListContainer from './containers/ScheduleListContainer'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/create'




function App() {
  return (<>
    <ErrorBoundary >
      <ConnectedRouter history={history} >
        <Switch>
          <Route path="/" exact component={ScheduleListContainer}>
          </Route>
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary >
  </>)
}

export default App;
