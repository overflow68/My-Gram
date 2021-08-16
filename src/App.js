import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Pages/Login';
import {AuthProvider} from './AuthProvider.js';
import PrivateRoute from "./Pages/PrivateRoute";
import Register from "./Pages/Register";





function App() {
  

 
  
  return (
    <Router>
      <AuthProvider>
      <div>
        <Switch> 
          <Route  exact path="/register" component={Register}></Route>
        <Route  exact path="/login" component={Login}></Route>
          <PrivateRoute  exact path="/" component={Feed}></PrivateRoute>
          <PrivateRoute  exact path="/profile" component ={Profile}></PrivateRoute>
        </Switch>
      </div>
      </AuthProvider>
    </Router>
  );
}
function Profile() {
  return <h2>Profile</h2>;
}


function Feed() {
  return <h2>Feed</h2>;
}
export default App;
