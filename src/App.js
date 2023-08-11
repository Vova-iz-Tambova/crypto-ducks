// App.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
// импортируем компоненты приложения
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
// импортируем CSS
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  } 

  render(){
    return (
      <Routes>
        <Route path="/" element={this.state.loggedIn ? <Navigate to="/ducks" replace /> : <Navigate to="/login" replace />} /> 
        <Route path="/ducks" element={<Ducks/>} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/login" element={
          <div className="loginContainer">
            <Login  />
          </div>} />
        <Route path="/register" element={
          <div className="registerContainer">
            <Register />
          </div>} />
      </Routes>
    )
  }
}

export default App;