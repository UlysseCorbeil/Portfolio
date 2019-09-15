import React from 'react';
import {
    Route,
    NavLink,
    Switch
} from "react-router-dom";

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

// modules
import HoverProject from '../modules/HoverProject';
import FollowMouse from '../modules/FollowMouse';

// views
import Project from '../views/Project';


import vlec from '../images/vlec.png';
import bonsound from '../images/bonsound.png';
import sandalwood from '../images/sandalwood.jpg';
import jez from '../images/jez.jpg';
import folespoir from '../images/folespoir.jpg';

class ProjectList extends React.Component {


    constructor(props) {
        super(props);

        this.sels = {
            state: 'active'
        };

        this.images = [
            jez,
            vlec,
            bonsound,
            folespoir,
            sandalwood
        ]
    };

    render() {
        return (
            <div className="project-list module">

                <div className="sectionTitle">Project I've worked on</div>

                {this.props.data.map((res, i) => (
                    <div className="project-wrapper">
                        <HoverProject key={i}>
                            {
                                isHovered =>
                                    <NavLink to={'/' + res.nomProjet.replace(/\s+/g, '-').toLowerCase() + '/'} className="link">

                                        <div className="inner-ctn">
                                            <img className={"project-image " + (isHovered ? this.sels.state : "")} src={this.images[i]} alt="VLEC" />
                                            <div className="header">
                                                <div className="number">0{res.id + 1}</div>
                                                <div className="name">{res.nomProjet}</div>
                                            </div>
                                            <div className="item-ctn">
                                                <div className="categ">{res.categProjet}</div>
                                                <div className="roles">{res.roles}</div>
                                                <div className="date">{res.date}</div>
                                            </div>

                                        </div>
                                    </NavLink>
                            }
                        </HoverProject>
                        <Route render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={450}
                                    classNames="fade"
                                >
                                    <Switch location={location}>
                                        <Route
                                            path={'/' + res.nomProjet.replace(/\s+/g, '-').toLowerCase() + '/'}
                                            render={(props) => <Project {...props} isAuthed={true} />}
                                        />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </div>
                ))
                }
            </div>
        );
    }
}
export default ProjectList;