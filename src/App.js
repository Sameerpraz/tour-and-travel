import { useEffect, useRef } from "react";
import "./App.css";
import { FaBars, FaKeyboard, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/blogs" render={() => <Blogs />} />
          {/* Other routes */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
