import React from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css';

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Route, Switch, Redirect } from 'react-router-dom';

//pages
// import Signin from './pages/Signin'

import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/create';
import imo from './pages/imo';
import Home from './pages/Home';
<<<<<<< HEAD

import { useSelector, useDispatch } from 'react-redux';
import DarkModeService from './services/DarkModeService';


function App() {
  const mode = useSelector(state => state.darkmode.mode);
  const dispatch = useDispatch();
  return (<>

    <ErrorBoundary >
      <button className="mode-changer" onClick={() => { DarkModeService.modeChange(mode, dispatch) }}>Mode Change</button>
      <ConnectedRouter history={history} >
        <Switch>
          <Route path="/imo" component={imo} />
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary >
  </>)


=======
import Signin from './pages/Signin';

function App() {
  return (
    <>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/Signin' component={Signin} />
            <Route path='/imo' component={imo} />
            <Route path='/' exact component={Home}></Route>
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </>
  );
>>>>>>> 8dea72f69db4288108bb6efcb010be4a12d55f7d
}

export default App;
