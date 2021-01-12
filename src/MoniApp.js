import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./containers/Sidebar";
import Home from "./containers/Home";
import Calendar from "./containers/Calendar";
import Chart from "./containers/Chart";

function MoniApp() {
  return (
    <div className="MoniApp">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/calendar" component={Calendar} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default MoniApp;
