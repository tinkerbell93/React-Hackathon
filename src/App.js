import React from "react";
import { Calendar, Badge } from "antd";
import "antd/dist/antd.css";

import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Route, Switch } from "react-router-dom";

//pages
// import Signin from './pages/Signin'

import ScheduleListContainer from "./containers/ScheduleListContainer";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/create";
import AddScheduleContainer from "./containers/AddScheduleContainer";
import SelectEmojiContainer from "./containers/SelectEmojiContainer";

function App() {
  return (
    <>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/add" component={AddScheduleContainer}></Route>
            <Route path="/emoji" component={SelectEmojiContainer}></Route>
            <Route path="/" exact component={ScheduleListContainer}></Route>
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
