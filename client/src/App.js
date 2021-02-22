import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={ "/saved"}>
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
