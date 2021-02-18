import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/login/login"
import Singup from "./components/signup/signup"
import Dashboard from "./components/dashboard/dashboard"

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <ul>
            <li> 
              <Link to="/">Login</Link>
            </li>
            <li> 
              <Link to="/singup">Signup</Link>
            </li>
            <li> 
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>


        <Switch>

          <Route exact={true} path="/">
            <Login/>
          </Route>

          
          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          
          <Route path="/singup">
            <Singup/>
          </Route>

        </Switch>
      </Router>

    </div>  
  );
}
export default App;
