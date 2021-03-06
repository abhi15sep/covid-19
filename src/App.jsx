import React from "react";
import "./App.css";
import WorldStatus from "./components/status/worldStatus/worldStatus";
import UsStatus from "./components/usStatus/usStatus";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Articles from "./components/articles/articles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import Landing from "./components/landing/landing";

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  ReactGA.initialize("UA-161621107-1");
  ReactGA.pageview(window.location.pathname);
  return (
    <BrowserRouter history={history}>
      <div className="App">
      <Navbar/>
        <Switch>
        {/*  <Route path="/articles" component={Articles} />*/}
        {/*   <Route path="/us-status" component={UsStatus} />*/}
          <Route path="/world-status" component={WorldStatus} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
