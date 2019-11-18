import React, { Component } from 'react'

// views
import ProjectList from './ProjectList';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="header-wrapper">
                    <Header />
                </div>
                <div className="project-list-wrapper">
                    <ProjectList />
                </div>
            </div>)
    }
}

export default Home
