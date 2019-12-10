import React from 'react';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl
        }
    }

    changeLangVal() {
      let lg = window.location.pathname.substring(1, 3);
        
		  switch (lg) {
            case 'fr':
               window.location = '/en/';
                break;

            case 'en':
                window.location = '/fr/';
                break;

            default:
                window.location = '/en/';
                break;
        }
    }

    render() {
        let lg = window.location.pathname.substring(1, 3);
        return (
            <div className="page">
                <div className="module">
                    <nav className="nav">
                        <div className="lg-change" onClick={this.changeLangVal}>{lg === 'en' ? 'FR' : (lg === 'fr' ? 'EN' : '')}</div>
                    </nav>
                </div>
            </div >
        );
    }
}
export default Nav;
