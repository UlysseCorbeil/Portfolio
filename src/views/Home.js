import React, { Component } from 'react';

// views
import ProjectList from './ProjectList';
import Header from './Header';

import WorkExperience from './WorkExperience';
import ButtonMain from '../section/ButtonMain';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl
        }
    }

    render() {
        const { languageByUrl } = this.state;
        return (
            <React.Fragment>
                <section className="header-wrapper">
                    <Header languageByUrl={languageByUrl} />
                </section>
                <section className="project-list-wrapper">
                    <ProjectList languageByUrl={languageByUrl} />
                    <ButtonMain url={'/' + languageByUrl + '/works'} content='All Projects'/>
                </section>
                <section className="work-experience-wrapper">
                    <WorkExperience/>
                </section>
            </React.Fragment>
        )
   }
}

export default Home
