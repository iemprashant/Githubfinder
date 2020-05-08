import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import about from './components/pages/about';
import User from './components/users/User';

class App extends React.Component{
  state={
    users:[],
    user:{},
    loading:true,
    alert:null,
    repos:[]
  }
  //Search github users
  searchUsers = async text =>
  {
   this.setState({loading:true});
  const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  console.log(text);
  this.setState({users:res.data.items, loading:false});
  };
  //Get single Github User
  getUser =async(username)=>{
    this.setState({loading:true});
   const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
   this.setState({user:res.data, loading:false});
   };
   //get user repo
   getUserRepos = async (username)=>{
    this.setState({loading:true});
   const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
   this.setState({ repos:res.data, loading:false});
   };
  //clear users from state
  clearUsers =()=>this.setState({ users:[] , loading:false });

  //set alert
  setAlert=(msg,type)=>{
    this.setState({alert:{msg,type}})
    setTimeout(()=>this.setState({alert:null}),5000);
  }
  render(){
    const { users, user,repos, loading,alert } = this.state;
    return (
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
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
              />
              <Route exact path='/about' component={about} />
              <Route exact path='/user/:login' render={props => (
                  <User
                    {...props}
                    getUser ={this.getUser}
                    getUserRepos ={this.getUserRepos}
                    repos={repos}
                    user ={user}
                    loading ={loading}
                  />
              )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
