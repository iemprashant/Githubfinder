import React from 'react'

const Useritem=({user:{login,avtarurl,html_url}})=>{
    return (
        <div className="card text-center">
            <img src={avtarurl} className="round-img" style={{width:'60px'}}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
            </div>
        </div>
    )
}
Useritem.propType={
    user:PropTypes.object.isRequired,
}

export default Useritem
