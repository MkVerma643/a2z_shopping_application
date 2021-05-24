import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import ResetPassword from "./components/ResetPassword";
import { BASE_URL } from "./components/constants/Base_url";
import axios from "axios";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/resetpassword" component={ResetPassword}></Route>
          <Route path="/signup" component={Register}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/cart" component={Cart}></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
