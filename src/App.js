import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Profile from './components/Profile';
import Cart from './components/Cart';


function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
           <Route path="/login" component={Login}></Route>
           <Route path="/signup" component={Register}></Route>
           <Route path="/orders" component={Orders}></Route>
           <Route path="/profile" component={Profile}></Route>
           <Route path="/cart" component={Cart}></Route>

           <Route path="/">
             <Header />
             <Home />
             <Footer />
           </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
