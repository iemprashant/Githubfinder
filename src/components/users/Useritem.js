import React, { Component } from 'react'

class Useritem extends Component {
    render() {
        const {login,html_url,avtarurl}=this.props.user;
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
}

export default Useritem
