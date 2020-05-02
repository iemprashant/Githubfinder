import React from 'react';
import './App.css'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <div className='container'>
          <Users/>
        </div>

      </React.Fragment>
    );
  }
};

export default App;
