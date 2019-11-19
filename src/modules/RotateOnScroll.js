import React from 'react';

import contactCircle from '../images/reachme.png';

class RotateOnScroll extends React.Component {

    state = {
        rotateVal: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
            this.resetVal();
        });
    }

    handleScroll() {
        this.setState({
            rotateVal: this.state.rotateVal + 3
        });
    }

    resetVal() {
        this.setState({
            rotateVal: 0
        });
    }

    render() {
        const { rotateVal } = this.state;
        const style = {
            transform: `rotate(${rotateVal}deg)`
        }
        return (
            <img style={style} src={contactCircle} alt="ulysse98@hotmail.com" />
        );
    }
}
export default RotateOnScroll;