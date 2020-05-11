import React, { Fragment,useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import about from './components/pages/about';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App=()=>{
  const [loading,setLoading] = useState(false);
  const [alert,setalert] = useState(null);
  const [repos,setRepos] = useState([]);


  //get user repo
  const getUserRepos = async username =>{
    setLoading(true);
   const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
   setRepos(res.data);
   setLoading(false);
   };
  //set alert
  const setAlert=(msg,type)=>{
  setalert({msg,type});

  setTimeout(()=>setalert(null),5000);
  };
    return (
      <GithubState>
        <Router>
          <div className='App'>
            <Navbar/>
            <div className='container'>
              <Alert alert={alert}/>
              <Switch>
                <Route exact path='/'render={props => 
                (
                  <Fragment>
                    <Search
                      setAlert={setAlert}
                    />
                    <Users/>
                  </Fragment>
                )}
                />
                <Route exact path='/about' component={about} />
                <Route exact path='/user/:login' render={props => (
                    <User
                      {...props}
                      getUserRepos ={getUserRepos}
                      repos={repos}
                    />
                )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    );
};

export default App;
