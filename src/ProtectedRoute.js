// ProtectedRoute.js

import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { AppContext } from './AppContext.js'; // импортируем контекст

const ProtectedRoute = ({ component: Component, ...props }) => {
  const value = React.useContext(AppContext); // получаем значения из контекста
  return (
    <Route>
      {
        () => value.state.loggedIn === true ? <Component {...props} userData={value.state.userData} /> : <Redirect to="./login" />
      }
    </Route>
)}

export default ProtectedRoute;