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
        let languageByUrl = location.pathname.substring(1, 3);
        return (
            <React.Fragment>
                <Nav languageByUrl={languageByUrl} />
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

                <TransitionGroup className="transition-group">
                    <CSSTransition key={location.key} timeout={{ enter: 250, exit: 500 }} classNames="page">
                        <section className="route-section">
                            <Switch location={location}>
                                <Route exact path={'/' + languageByUrl + '/'} component={() => <Home languageByUrl={languageByUrl} />} />
                                <Route path={'/' + languageByUrl + '/jezabel-plamondon'} component={() => <Project projectKey={0} languageByUrl={languageByUrl} />} />
                                <Route path={'/' + languageByUrl + '/valley-laser-eye-centre'} component={() => <Project projectKey={1} languageByUrl={languageByUrl} />} />
                                <Route path={'/' + languageByUrl + '/bonsound-promo'} component={() => <Project projectKey={2} languageByUrl={languageByUrl} />} />
                                <Route path={'/' + languageByUrl + '/le-fol-espoir'} component={() => <Project projectKey={3} languageByUrl={languageByUrl} />} />
                                <Route path={'/' + languageByUrl + '/sandalwood'} component={() => <Project projectKey={4} languageByUrl={languageByUrl} />} />
                                <Route component={() => <ErrorPage languageByUrl={languageByUrl} />} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
              </React.Fragment>
        )
    }

}
export default withRouter(App);
