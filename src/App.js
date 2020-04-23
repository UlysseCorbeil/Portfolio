import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './views/Home';
import Project from './views/Project';
import Nav from './views/Nav';

// 404
import ErrorPage from './views/ErrorPage';

import TransformOnScroll from './modules/TransformOnScroll';
import contactCircle from './images/reachme.png';

class App extends React.Component {

    render() {
        const { location } = this.props;
        
        return (
            <React.Fragment>
                <Nav />
                <div className="contactSticky">
                    <a href="mailto:ulysse98@hotmail.com">

                        <TransformOnScroll
                            tasks={['rotate']}
                            rotateSpeed={6}
                        >
                          <img src={contactCircle} alt="ulysse98@hotmail.com"/>
                        </TransformOnScroll>

                    </a>
                </div>

                <TransitionGroup className="transition-group page">
                    <CSSTransition key={location.key} timeout={{ enter: 250, exit: 500 }} classNames="page">
                        <section className="route-section module spacing">
                            <Switch location={location}>
                                <Route exact path={'/'} component={() => <Home />} />
                                <Route path={'/jezabel-plamondon'} component={() => <Project projectKey={0} />} />
                                <Route path={'/valley-laser-eye-centre'} component={() => <Project projectKey={1} />} />
                                <Route path={'/bonsound-promo'} component={() => <Project projectKey={2} />} />
                                <Route path={'/le-fol-espoir'} component={() => <Project projectKey={3} />} />
                                <Route path={'/sandalwood'} component={() => <Project projectKey={4} />} />
                                <Route component={() => <ErrorPage />} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
              </React.Fragment>
        )
    }

}
export default withRouter(App);
