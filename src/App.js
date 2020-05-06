import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import about from './components/pages/about';

class App extends React.Component{
  state={
    users:[],
    loading:true,
    alert:null
  }
  //Search github users
  searchUsers = async text =>
  {
   this.setState({loading:true});
  const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
  console.log(text);
  this.setState({users:res.data.items, loading:false});
  };
  //clear users from state
  clearUsers =()=>this.setState({ users:[] , loading:false });

  //set alert
  setAlert=(msg,type)=>{
    this.setState({alert:{msg,type}})
    setTimeout(()=>this.setState({alert:null}),5000);
  }
  render(){
    return (
      <Router>
        <div className='App'>
          <Navbar/>
          <div className='container'>
            <Alert alert={this.state.alert}/>
            <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers}
            showClear={this.state.users.length>0?true:false}
            setAlert={this.setAlert}/>
            <Switch>
              <Route exact path='/about' component={about}/>
            </Switch>
            <Users loading={this.state.loading} users ={this.state.users}/>
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
