import React from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css'

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Route, Switch, Redirect } from 'react-router-dom';



//pages
// import Signin from './pages/Signin'


import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/create'
import imo from './pages/imo';
import Home from './pages/Home';




function App() {
  return (<>
    <ErrorBoundary >
      <ConnectedRouter history={history} >
        <Switch>
          <Route path="/imo" component={imo} />
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary >
  </>)
}

export default App;
