import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
    state={
        text:''
    };
    onChange= e => this.setState({text:e.target.value});
    static propTypes={
        searchUsers:PropTypes.func.isRequired
    }
    onSubmit=e=>
    {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users...." 
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}
export default Search;
