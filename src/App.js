import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import About from "./components/layout/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="bg-danger">
            <Navbar />
          </div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Tasks} />
              <Route exact path="/add" component={AddTask} />
              <Route exact path="/contact/edit/:id" component={EditTask} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
