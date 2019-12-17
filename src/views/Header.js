import React from 'react';

import LineSvg from '../svg/LineSVG';
import BlueCircle from '../svg/BlueCircle';
import RedCircle from '../svg/RedCircle';

import image from '../images/introImg.jpg';

import TransformOnScroll from '../modules/TransformOnScroll';

import Helpers from '../modules/util/Helpers';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl,
            dataHeader: [],
            intervalIsSet: false,
            date: '',
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
        const { dataHeader, date, languageByUrl } = this.state;
        const formattedDate = Helpers.sanatizeVariable(Helpers.formatDate(document.lastModified));
        return (
            <div className='header-ctn'>
                {!!!this.state.done ? '' : (
                            <div className='header'>
                              <div className='surtitle'>{dataHeader.surtitle}</div>
                              <div className='surtitle-two'>{dataHeader.surtitleTwo}</div>

                                <div className='main-ctn'>
                                  <div className='title'>{dataHeader.title}</div>

                                  <TransformOnScroll
                                    tasks={['translate']}
                                    translateSpeed={5}
                                    translateY={15}
                                  >
                                    <div className="img-container">
                                      <img className='image' src={image} alt='Ulysse' />
                                    </div>
                                  </TransformOnScroll> 

                                    <div className='end-content'>
                                      
                                      <TransformOnScroll
                                        tasks={['translate']}
                                        translateSpeed={5}
                                        translateY={15}
                                      >
                                        <div className='last-update'>{languageByUrl === 'en' ? 'last update ' : 'dernière mise à jour '}{formattedDate}</div>
                                      </TransformOnScroll>
                                      
                                      <TransformOnScroll
                                        tasks={['translate']}
                                        translateSpeed={3}
                                        translateY={35}
                                      >
                                        <div className='year'>{'/' + new Date().getFullYear()}</div>
                                      </TransformOnScroll>
                                    </div>
                                </div>
                  </div>
                )}
            </div>
        );
    }
}
export default Header;
