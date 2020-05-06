import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
    state={
            text:''
        };
    onChange= e => this.setState({text:e.target.value});
    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }
    onSubmit=e=>
    {
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Please enter something','light');
        }
        else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }
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
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
                {/* <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button> */}
            </div>
        )
    }
}
export default Search;
