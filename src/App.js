import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <Router>
          <div className="App">
              <h2>Client Auth Project</h2>
          </div>

          <Link className="links" to={'/'}>Login</Link>
          <Link className="links" to={'/friends'}>Friends</Link>
          <Link className="links" to={'/friends/add'}>Add Friend</Link>
          <Link className="links" to={'/logout'}>Log Out</Link>

          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/login">
            <Redirect to="/" />
          </Route>

          <Route exact path="/friends">
            <FriendsList />
          </Route>

          <Route exact path="/friends/add">
            <AddFriend />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>
      </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
