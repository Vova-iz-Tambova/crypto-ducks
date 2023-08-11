// App.js

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Ducks from "./Ducks.js";
import MyProfile from "./MyProfile.js";
import ProtectedRoute from "./ProtectedRoute"; // импортируем HOC
import "./styles/App.css";
import { AppContext } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // настало время проверить токен
      this.tokenCheck();
      }, [])

    const tokenCheck = () => {
      // если у пользователя есть токен в localStorage,
      // эта функция проверит, действующий он или нет
      if (localStorage.getItem('jwt')){
        const jwt = localStorage.getItem('jwt');

        // здесь будем проверять токен
      }
     }
  }


tokenCheck () {
  // если у пользователя есть токен в localStorage,
  // эта функция проверит валидность токена
    const jwt = localStorage.getItem('jwt');
  if (jwt){
    // проверим токен
            duckAuth.checkToken(jwt).then((res) => {
        if (res){
                // здесь можем получить данные пользователя!
        const userData = {
          username: res.username,
          email: res.email
        }
                    // авторизуем пользователя
          setLoggedIn(true);
                    setUserData(userData)
          navigate("/ducks", {replace: true})
        }
      });
  }
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
<AppContext.Provider value={{state: this.state, handleLogin: this.handleLogin}}>
  <Switch>
    <ProtectedRoute path="/ducks" component={Ducks} />
    <ProtectedRoute path="/my-profile" component={MyProfile} />
    <Route path="/login">
      <div className="loginContainer">
        <Login />
      </div>
    </Route>
    <Route path="/register">
      <div className="registerContainer">
        <Register />
      </div>
    </Route>
    <Route>
      {this.state.loggedIn ? <Redirect to="/ducks" /> : <Redirect to="/login" />}
    </Route>
  </Switch>
</ AppContext.Provider>
    );
  }
}

export default App;