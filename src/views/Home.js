import React, { Component } from 'react';

// views
import ProjectList from './ProjectList';
import Header from './Header';

import WorkExperience from './WorkExperience';
import ButtonMain from '../section/ButtonMain';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <React.Fragment>
                <section className="header-wrapper">
                    <Header />
                </section>
                <section className="project-list-wrapper">
                    <ProjectList />
                    <ButtonMain url={'/works'} content='All Projects'/>
                </section>
                <section className="work-experience-wrapper">
                    <WorkExperience/>
                </section>
            </React.Fragment>
        )
   }
}

export default Home;
