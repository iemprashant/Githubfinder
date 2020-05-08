import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const ReposList = ({repos}) => {
    return repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)
}

ReposList.propTypes = {
repos:PropTypes.array.isRequired 
}

export default ReposList
