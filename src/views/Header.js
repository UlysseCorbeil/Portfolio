import React from 'react';

import image from '../images/image_moi.jpg';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header-ctn'>
                {this.props.data.map((res, i) => (

                    <div className='item' key={i}>
                        <div className='inner-ctn'>
                            <div className='header'>

                                <div className='intro'>
                                    <div className='surtitle'>{res.surtitle}</div>
                                    <div className='main-ctn'>
                                        <div className='title'>{res.title}</div>
                                        <img className='image' src={image} alt='Ulysse' />
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