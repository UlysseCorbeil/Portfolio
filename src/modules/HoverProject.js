import React from 'react';

class HoverProject extends React.Component {

    state = {
        isHovered: false,
        xPos: 0,
        yPos: 0
    };

    onMouseMove(e) {
        this.setState({
            xPos: e.screenX,
            yPos: e.screenY
        });
    }

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
                onMouseMove={this.onMouseMove.bind(this)}
            >
                {this.props.children(this.state.isHovered, this.state.xPos, this.state.yPos)}
            </div >
        );
    }
}
export default HoverProject;