import React from "react";
import { Calendar, Badge } from "antd";
import "antd/dist/antd.css";

import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Route, Switch, Redirect } from "react-router-dom";

//pages
// import Signin from './pages/Signin'

<<<<<<< HEAD
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/create";
import Home from "./pages/Home";
import SelectEmojiContainer from "./containers/SelectEmojiContainer";
import AddScheduleContainer from "./containers/AddScheduleContainer";
=======
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/create';
import imo from './pages/imo';
import Home from './pages/Home';
import Signin from './pages/Signin';
>>>>>>> e79cab4ad2e59c0575873d657989e94731858017

function App() {
  return (
    <>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/add" component={AddScheduleContainer} />
            <Route path="/emoji" component={SelectEmojiContainer} />
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
