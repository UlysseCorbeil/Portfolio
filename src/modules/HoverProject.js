import React from 'react';

class HoverProject extends React.Component {

    state = {
        isHovered: false,
    };

    onMouseEnter() {
        this.setState({ isHovered: true });
    }
    onMouseLeave() {
        this.setState({ isHovered: false });
    }

    render() {
        return (
            <div
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                className="project-item"
            >
                {this.props.children(this.state.isHovered)}
            </div >
        );
    }
}
export default HoverProject;