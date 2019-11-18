import React from 'react';

class FollowMouse extends React.Component {

    state = {
        xPos: 0,
        yPos: 0
    };

    onMouseMove(e) {
        this.setState({
            xPos: e.screenX,
            yPos: e.screenY
        });
    }

    render() {
        return (
            <div
                onMouseMove={this.onMouseMove.bind(this)}
                className="img-ctn"
            >
                {this.props.children(this.state.xPos, this.state.yPos)}
            </div >
        );
    }
}
export default FollowMouse;