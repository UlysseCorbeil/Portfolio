/*
 *  Reveal
 *
 *  Used to add classes to a section when the element is in view. It uses the
 *  IntersectionObserver API so it's blazing fast.
 *
 *  - Usage
 
 *      - Just wrap your content inside the Reveal component and pass the class 
 *      you which to use on the content.
 *
 *  - Props
 
 *      - className: class you want to give to the container.
 
 *      - key (optional): only if you're in a loop and want to have the
 *      component as a wrapper.
 
 *      - threshold: Either a single number or an array of numbers which indicate
 *      at what percentage of the target's visibility the observer's callback
 *      should be executed.
 *
 *      - rootMargin: Margin around the root. Can have values similar to the CSS
 *      margin property,e.g. "10px 20px 30px 40px" (top, right, bottom, left).
 *      The values can be percentages. This set of values serves to grow or shrink
 *      each side of the root element's bounding box before computing intersections.
 *      Defaults to all zeros.
 *  
 *
 *      @author: Ulysse Corbeil
 *
*/

'use strict';

import React from 'react';

class Reveal extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          isVisible: false,
          ref: React.createRef()
      }
  }

  async componentDidMount () {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
          this.setState({
            isVisible: entry.isIntersecting
          });    
      });

    }, {
      threshold: this.props.threshold,
      rootMargin: this.props.rootMargin
    });

    observer.observe(this.state.ref.current);

  }
           
  render() {

        const { isVisible } = this.state;

        return (
            <div className={` ${this.props.className} ${isVisible ? 'is-visible' : ''}`} ref={this.state.ref}>
              {this.props.children}
            </div>
        );
    }
}

export default Reveal;

