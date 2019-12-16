import React, { Component } from 'react';

// views
import ProjectList from './ProjectList';
import Header from './Header';

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
            <div className="page">
                <section className="header-wrapper module">
                    <Header languageByUrl={languageByUrl} />
                </section>
                <section className="project-list-wrapper module spacing">
                    <ProjectList languageByUrl={languageByUrl} />
                    <ButtonMain url={'/' + languageByUrl + '/works'} content='All Projects'/>
                    <div className="module spacing"></div>
                </section>
            </div>
        )
   }
}

export default Home
