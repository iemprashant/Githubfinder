import React, { Component } from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const Users=({users,loading})=>{
  if(loading){
    return <Spinner/>
  }
  else{
    return (
      <div style={userstyle}>
          {users.map(userobj=>(
              <Useritem  user={userobj}/>
          ))}
      </div>
  )
  }
}
  Users.propTypes={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
  }
 const userstyle={
     display: 'grid',
     gridTemplateColumns:'repeat(3,1fr)',
     gridGap:'1rem'
     
 }
export default Users
