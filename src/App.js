import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends React.Component{
  state={
    users:[],
    loading:true
  }
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

  this.setState({loading:true});

  const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

  this.setState({users:res.data, loading:false});
  }
  
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <div className='container'>
          <Search/>
          <Users loading={this.state.loading} users ={this.state.users}/>
        </div>

      </React.Fragment>
    );
  }
};

export default App;
