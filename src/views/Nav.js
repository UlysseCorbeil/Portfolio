import React from 'react';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className="page">
                <div className="module">
                    <nav className="nav">
                        <NavLink to='/' className="link">
                            <div class="lg-change">Fr</div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Nav;