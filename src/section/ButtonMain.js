import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
          color: this.props.color,
          url: this.props.url,
          content: this.props.content
        }
    }

    render() {
        const { content, color, url, location } = this.state;
        return (
            <div className="button-main">
              <Link
                to={{
                   pathname: url
                }}
                className="wrapper link"
              >

                <div className="shape"/>
                <div className="content">{content}</div>
              </Link>
            </div>
        )
   }
}

export default ButtonMain

