import React, { Component } from 'react';

// views
import ProjectList from './ProjectList';
import Header from './Header';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl
        }
    }

    render() {
        return (
            <div className="page">
                <div className="header-wrapper">
                    <Header languageByUrl={this.state.languageByUrl} />
                </div>
                <div className="project-list-wrapper">
                    <ProjectList languageByUrl={this.state.languageByUrl} />
                </div>
            </div>
        )
   }
}

export default Home
