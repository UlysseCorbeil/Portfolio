import React from 'react';
import ReactDOM from "react-dom";

import Helpers from './util/Helpers';

class Hover extends React.Component {

  constructor(props) {
        super(props);

        this.state = {
          isHovered: false,
          xPos: 0,
          yPos: 0,
          pos: 0
        }
    }
    
    onMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      let isInside = Helpers.isCursorInside(e, rect);
      
      if (!!!isInside) {
        this.onMouseLeave();
      }

      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top - 70;

      this.setState({
        pos: rect,
        xPos: x,
        yPos: y
      });
      

    }

    onMouseEnter(e) {
        this.setState({ isHovered: true });
    }

    onMouseLeave() {
        this.setState({ isHovered: false });
    }

    render () {
      const { isHovered, xPos, yPos, pos } = this.state;

      const position = {top:` ${yPos}px `, left: ` ${xPos}px `};

      const childrenWithProps = React.Children.map(this.props.children, (child, index) =>
        React.cloneElement(child)
      );

        return (
            <div
              className={` ${this.props.className} ${isHovered ? 'is-hovered' : ''}`}
              onMouseEnter={this.onMouseEnter.bind(this)}
              onMouseLeave={this.onMouseLeave.bind(this)}
              onMouseMove={this.onMouseMove.bind(this)}
            >
              {this.props.children}
              <div className="button-container"
                ref="buttonContainer"
                style={position}
              >
                <div className="shape"/>
                <span className="content">See project</span>
              </div>

            </div >
        );
    }
}

export default Hover;
