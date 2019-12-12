import React from 'react';

class Hover extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        }
    }

    onMouseEnter() {
        this.setState({ isHovered: true });
    }

    onMouseLeave() {
        this.setState({ isHovered: false });
    }

    render () {
        const { isHovered } = this.state;
        return (
            <div
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                className={` ${this.props.className} ${isHovered ? 'is-hovered' : ''}`}
            >
                {this.props.children}
            </div >
        );
    }
}

export default Hover;
