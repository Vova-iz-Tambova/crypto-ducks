// App.js

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Ducks from "./Ducks.js";
import MyProfile from "./MyProfile.js";
import ProtectedRoute from "./ProtectedRoute"; // импортируем HOC
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    // позже здесь тоже нужно будет проверить токен пользователя!
  };
  handleLogin = () => {
      e.preventDefault();
    this.setState({
      loggedIn: true
    })
  }

  render() {
    return (
      <Routes>
        <ProtectedRoute
          path="/ducks"
          loggedIn={this.state.loggedIn}
          component={Ducks}
        />
        <ProtectedRoute
          path="/my-profile"
          loggedIn={this.state.loggedIn}
          component={MyProfile}
        />
        <Route path="/login">
          <div className="loginContainer">
            <Login handleLogin={this.handleLogin} />
          </div>
        </Route>
        <Route path="/register">
          <div className="registerContainer">
            <Register />
          </div>
        </Route>
        <Route path="/" element={this.state.loggedIn ? <Navigate to="/ducks" replace /> : <Navigate to="/login" replace />} />
        <Route path="/ducks" element={<ProtectedRouteElement element={<Ducks/>} loggedIn={this.state.loggedIn}/>} />
        <Route path="/my-profile" element={<ProtectedRouteElement element={<MyProfile/>} loggedIn={this.state.loggedIn}/>} />
        <Route path="/register" element={
          <div className="registerContainer">
            <Register />
          </div>} />
        <Route path="/login" element={
          <div className="loginContainer">
            <Login handleLogin={this.handleLogin} />
          </div>} />
      </Routes>
    );
  }
}

export default App;