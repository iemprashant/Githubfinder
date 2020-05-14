import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/alert';
import about from './components/pages/about';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/home';
import NotFound from './components/pages/NotFound';

const App=()=>{
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar/>
              <div className='container'>
                <Alert/>
                <Switch>
                  <Route exact path='/'component={Home}/>
                  <Route exact path='/about' component={about} />
                  <Route exact path='/user/:login'component={User}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
};

export default App;
