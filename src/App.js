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
        <Route path="/ducks" element={<ProtectedRouteElement element={<Ducks/>} loggedIn={loggedIn}/>} />
        <Route path="/my-profile" element={<ProtectedRouteElement element={<MyProfile userData={this.state.userData}/>} loggedIn={loggedIn}/>} />
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