import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import ScoreBoard from "./ScoreBoard";
import Login from "./Login";
import CodeBreak from "./CodeBreak";

function App() {

  return (
    <div>
      <h1 id = "main-header">Bit Battle</h1>
      <NavBar id = "NavBar"/>
      <Switch>
        <Route path = '/codeBreak'>
          <CodeBreak/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route exact path = "/">
          <ScoreBoard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
