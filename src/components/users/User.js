import React, { Component } from 'react'

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    render() {
         const { name, avatar_url, ocation,bio,blog,login,html_url,followers,following,public_repos,public_gists,hiresble}=this.props.users;
         const {loading}=this.props;
        return (
            <div>
            
            </div>
        )
    }
}

export default User

