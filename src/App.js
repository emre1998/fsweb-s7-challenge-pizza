import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import SiparisFormu from "./components/SiparisFormu";
import SiparisOnayi from "./components/SiparisOnayı";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/siparis-ver" component={SiparisFormu} />
        <Route path="/siparis-onayi" component={SiparisOnayi}/>
      </Switch>
    </Router>
  );
};

export default App;










