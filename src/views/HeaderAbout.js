import React from 'react';

import LineSvg from '../svg/LineSVG';
import BlueCircle from '../svg/BlueCircle';
import RedCircle from '../svg/RedCircle';

import image from '../images/image_moi.jpg';

import TransformOnScroll from '../modules/TransformOnScroll';

class HeaderAbout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataHeader: [],
            intervalIsSet: false,
            done: undefined
        }
    }

    componentDidMount() {

        // data init
        this.getHeaderAboutFromDb();


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

    getHeaderAboutFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getHeaderAbout')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true, percent: data });
                    });
                    return data.json();
                })
                .then((res) => {
                    res.data.map(async (v) => {
                        this.setState({ dataHeader: v })
                    })
                })
        });
    }

    render() {
        const { dataHeader, date } = this.state;
        return (
            <div className='header-about-ctn'>
                {!!!this.state.done ? '' : (
                    <div className='header-about'>

                      <div className='surtitle'>{dataHeader.surtitle}</div>
                      <div className='surtitle-two'>{dataHeader.surtitleTwo}</div>

                      <div className='main-ctn'>

                          <div className='title'>{dataHeader.title}</div>
                          
                          <div className="img-container">

                            <img className='image' src={image} alt='Ulysse' />
                            <div className='back-ctn'>

                                  <BlueCircle />
                                  <LineSvg />
                                  <RedCircle />

                                </div>

                            </div>

                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default HeaderAbout;

