import React from 'react';

import LineSvg from '../svg/LineSVG';
import BlueCircle from '../svg/BlueCircle';
import RedCircle from '../svg/RedCircle';

import image from '../images/image_moi.jpg';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header-ctn module'>
                {this.props.data.map((res, i) => (

                    <div className='item' key={i}>
                        <div className='inner-ctn'>
                            <div className='header'>

                                <div className='intro'>
                                    <div className='surtitle'>{res.surtitle}</div>
                                    <div className='surtitle-two'>{res.surtitleTwo}</div>
                                    <div className='main-ctn'>
                                        <div className='title'>{res.title}</div>
                                        <div className="img-container">
                                            <img className='image' src={image} alt='Ulysse' />
                                            <BlueCircle />
                                            <LineSvg />
                                            <RedCircle />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default Header;