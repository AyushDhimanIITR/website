import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/main/login/Login";
import Main from "./page/main/Main";
import Setting from "./page/main/settings/Setting";
import Single from "./page/main/single/Single";
import Write from "./page/main/write/Write";
import TopBar from "./topbar/TopBar";

    


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exaxt path="/post">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route path="/login">{currentUser ? <Main /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/setting">
          {currentUser ? <Setting /> : <Login />}
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;