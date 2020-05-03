import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends React.Component{
  state={
    users:[],
    loading:false
  }
  async componentDidMount() {

  this.setState({loading:true});

  const res=await axios.get('https://api.github.com/users');

  this.setState({users:res.data, loading:false});
  }
  
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <div className='container'>
          <Users loading={this.state.loading} users ={this.state.users}/>
        </div>

      </React.Fragment>
    );
  }
};

export default App;
