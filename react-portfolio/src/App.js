import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navbar"
import projectPage from "../src/components/pages/projectPage"
import aboutMe from "../src/components/pages/aboutMe"
import 'bootstrap/dist/css/bootstrap.min.css';
// import FriendCard from "./components/FriendCard";


class App extends Component {
    // Setting this.state.projects to the projects json array
    render() {
        return (
          <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={aboutMe} />
            <Route exact path="/projectPage" component={projectPage} />
          </div>
          </Router>
        );
    }
}

export default App;