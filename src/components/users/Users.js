import React,{useContext} from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import githubContext from '../../context/github/githubContext';


const Users=()=>{
  const GithubContext = useContext(githubContext)
  const {users,loading} =GithubContext;
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
 const userstyle={
     display: 'grid',
     gridTemplateColumns:'repeat(3,1fr)',
     gridGap:'1rem'
     
 }
export default Users
