/*
 *  - Needs to be directly wrapping element
 *  - Works with relative, absolute and fixed elements
 *  - params : 
 *
 *      tasks : object containing an array of the tasks you which to apply to the element.
 *          - rotate
 *          - scale
 *
 *      rotateSmoothValue : takes an int. The lower the number, the faster the
 *      rotation.
 *
 *      initialScale : set initial scale of your element here.
 *      maxScale : set maximum scale of your element here.
 *
 *      @author: Ulysse Corbeil
 *
*/

import React from 'react';
import Helpers from './util/Helpers';

class ChangeStateOnScroll extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: props.tasks,
            possibleTasks: [
                'scale',
                'rotate',
                'translate'
            ],

            // rotate
            rotateVal: 0,
            prevScroll: window.scrollY,
            rotateSmoothValue: props.rotateSpeed === undefined ? 0 : props.rotateSpeed,
          
            // scale
            scaleVal: 1,
            initialScale: props.initialScale === undefined ? 0: props.initialScale,
            maxScale: props.maxScale === undefined ? 0 : props.maxScale,

            // translate
            translateSpeed: props.translateSpeed === undefined ? 0 : props.translateSpeed,
            translateY: props.translateY === undefined ? 0 : props.translateY, 
            translateX: props.translateX === undefined ? 0 : props.translateX,
            translateZ: props.translateZ === undefined ? 0 : props.translateZ
        }
    }

    componentDidMount () {
        // reset everything before updating
        this.resetVal();
        window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        });
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.resetVal);

    }

    handleScroll(e) {

        
        let matches = Helpers.arrayMatches(this.state.tasks, this.state.possibleTasks);

        matches.forEach((val, key) => {
          if (val === 'scale') {
            this.handleScale(e);
          } else if (val === 'rotate') {
            this.handleRotate(e);
          } else if (val === 'translate') {
            this.handleTranslate(e);
          } else {
            this.resetVal();
          }
        });
    }
    
    handleRotate(e) {
        const ct = e.currentTarget;

        if (this.state.prevScroll > ct.scrollY) {

            this.setState({
              rotateVal: window.pageYOffset / this.state.rotateSmoothValue
            });

        } else if (this.state.prevScroll < ct.scrollY) {

            this.setState({
              rotateVal: window.pageYOffset / this.state.rotateSmoothValue
            });

        }
    }
    
    handleScale(e) {
        const ct = e.currentTarget;
        const docHeight = document.documentElement.offsetHeight;
        const winInnerHeight = window.innerHeight;

        if (this.state.prevScroll > ct.scrollY) {

            this.setState({
              scaleVal: Helpers.normalizeValue((
                (window.pageYOffset / (docHeight - winInnerHeight)) - this.state.maxScale / 
                (this.state.initialScale - this.state.maxScale)), 1, 2)
            });

        } else if (this.state.prevScroll < ct.scrollY) {

            this.setState({
              scaleVal: Helpers.normalizeValue((
                (window.pageYOffset / (docHeight - winInnerHeight)) - this.state.maxScale / 
                (this.state.initialScale - this.state.maxScale)), 1, 2)
            });

        }
    }

    handleTranslate(e) {
        const ct = e.currentTarget;

        if (this.state.prevScroll > ct.scrollY) {

            this.setState({
              translateY: (window.pageYOffset - this.state.translateY) / this.state.translateSpeed
            });

        } else if (this.state.prevScroll < ct.scrollY) {

            this.setState({
              translateY: (window.pageYOffset - this.state.translateY) / this.state.translateSpeed
            });

        }
    }
    

    resetVal() {
        this.setState({
          rotateVal: 0,
          scaleVal: 1,
          translateY: 0
        });
    }

    render() {
        const { rotateVal, scaleVal, translateY} = this.state;
        const style = {
            position: 'relative'
        };

        const transformAttr = { transform: `
            rotate(${rotateVal}deg) 
            scale(${scaleVal})
            translate3d(${0}px, ${-translateY}px, ${0}px)  
            `
        };

        const childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { style: transformAttr })
        );
        
        return (
            <div style={style} className="sticky-wrapper">
                {childrenWithProps}
            </div>
        );
    }
}
export default ChangeStateOnScroll;
