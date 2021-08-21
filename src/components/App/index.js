import React from "react";
import { ToastContainer } from "react-toastify";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Overview from "../Overview";
import Create from "../Create";
import View from "../View";
import "react-toastify/dist/ReactToastify.css";
import { AppWrapper, GlobalStyle } from "../styled";

WebFont.load({
  google: {
    families: ["Open Sans:400,600,700", "sans-serif"],
  },
});

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <ToastContainer />
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Create} />
          <Route path="/view" component={View} />
          <Route path="/" component={Overview} />
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
