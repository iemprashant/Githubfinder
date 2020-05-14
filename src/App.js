import React, { Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import about from './components/pages/about';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

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
                  <Route exact path='/'render={props => 
                  (
                    <Fragment>
                      <Search/>
                      <Users/>
                    </Fragment>
                  )}
                  />
                  <Route exact path='/about' component={about} />
                  <Route exact path='/user/:login'component={User}/>
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
};

export default App;
