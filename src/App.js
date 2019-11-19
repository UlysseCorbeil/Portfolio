import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './views/Home';
import Project from './views/Project';
import Nav from './views/Nav';

// 404
import ErrorPage from './views/ErrorPage';

import RotateOnScroll from './modules/RotateOnScroll';

class App extends React.Component {

    render() {
        const { location } = this.props;
        return (
            <div className="site">
                <Nav />
                <div className="contactSticky">
                    <a href="mailto:ulysse98@hotmail.com"><RotateOnScroll /></a>
                </div>
                <TransitionGroup className="transition-group">
                    <CSSTransition key={location.key} timeout={{ enter: 250, exit: 500 }} classNames="page">
                        <section className="route-section">
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/jézabel-plamondon" component={() => <Project projectKey={0} />} />
                                <Route path="/valley-laser-eye-centre" component={() => <Project projectKey={1} />} />
                                <Route path="/bonsound-promo" component={() => <Project projectKey={2} />} />
                                <Route path="/le-fol-espoir" component={() => <Project projectKey={3} />} />
                                <Route path="/sandalwood" component={() => <Project projectKey={4} />} />
                                <Route component={ErrorPage} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div >
        )
    }

}
export default withRouter(App);