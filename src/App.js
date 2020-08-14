import React from "react";
import { Calendar, Badge } from "antd";
import "antd/dist/antd.css";

import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Route, Switch, Redirect } from "react-router-dom";

//pages
import Signin from "./pages/Signin";

import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/create";
import Home from "./pages/Home";
import SelectEmojiContainer from "./containers/SelectEmojiContainer";
import AddScheduleContainer from "./containers/AddScheduleContainer";
import EditScheduleContainer from "./containers/EditScheduleContainer";

function App() {
  return (
    <>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/Signin" component={Signin} />
            <Route path="/edit" component={EditScheduleContainer} />
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
