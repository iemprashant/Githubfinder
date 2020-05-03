import React, { Component } from 'react'
import Useritem from './Useritem'

class Users extends Component {
    render() {
        return (
            <div style={userstyle}>
                {this.props.users.map(userobj=>(
                    <Useritem  user={userobj}/>
                ))}
            </div>
        )
    }
}
    
 const userstyle={
     display: 'grid',
     gridTemplateColumns:'repeat(3,1fr)',
     gridGap:'1rem'
     
 }
export default Users
