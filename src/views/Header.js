import React from 'react';

import LineSvg from '../svg/LineSVG';
import BlueCircle from '../svg/BlueCircle';
import RedCircle from '../svg/RedCircle';

import image from '../images/image_moi.jpg';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl,
            dataHeader: [],
            intervalIsSet: false,
            done: undefined
        }
    }

    componentDidMount() {

        // data init
        this.getHeaderInfoFromDb();

        if (!!!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (!!this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getHeaderInfoFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getHeaderInfo')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true, percent: data });
                    });
                    return data.json();
                })
                .then((res) => {
                    res.data.map(async (v) => {
                        if (v.lg === this.state.languageByUrl) {
                            this.setState({ dataHeader: v })
                        }
                    })
                })
        });
    }

    render() {
        const { dataHeader } = this.state;
        return (
            <div className='header-ctn module'>
                {!!!this.state.done ? '' : (

                    <div className='item'>
                        <div className='inner-ctn'>
                            <div className='header'>
                                <div className='intro'>
                                    <div className='surtitle'>{dataHeader.surtitle}</div>
                                    <div className='surtitle-two'>{dataHeader.surtitleTwo}</div>
                                    <div className='main-ctn'>
                                        <div className='title'>{dataHeader.title}</div>
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
                )}
            </div>
        );
    }
}
export default Header;
