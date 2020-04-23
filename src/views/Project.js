import React from 'react';
import { Link } from "react-router-dom";

import vlec from '../images/vlec.png';
import bonsound from '../images/bonsound.png';
import sandalwood from '../images/sandalwood.jpg';
import jez from '../images/jez.jpg';
import folespoir from '../images/folespoir.jpg';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pKey: this.props.projectKey,
            dataWorks: [],
            intervalIsSet: false
        }

        this.images = [
            jez,
            vlec,
            bonsound,
            folespoir,
            sandalwood
        ]
    };

    componentDidMount() {

        // data init
        this.getWorksFromDb();

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

    getWorksFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getWorksData')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true, percent: data });
                    });
                    return data.json();
                })
                .then((res) => this.setState({ dataWorks: res.data }));
        });
    }

    returnProjectImage = () => {
        let pKey = this.state.pKey;
        let rightImage = '';
        this.images.map((image, key) => (
            pKey === key ? rightImage = image : null
        ))
        return rightImage;
    }

    render() {
        const { dataWorks, goBack, pKey} = this.state;
        return (
            <div className="project">
                    {
                        <React.Fragment>
                            <Link to={{pathname: '/'}}>
                                <div>back</div>
                            </Link> 
                            <div className="project-header">
                                {dataWorks.filter(res => res.id === pKey).map((res, key) => (
                                    <div className="project-header-title" key={key}>
                                        <div className="ctn">
                                            <div className="title-ctn">
                                                <div className="nom-projet">{res.nomProjet}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="header-img-wrapper">
                                    <div className="header-img-ctn">
                                        <div className="header-img-inner-ctn">
                                            <img src={this.returnProjectImage()} alt="nom projet" className="header-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {dataWorks.filter(res => res.id === pKey).map((res, key) => (
                                <div className="project-header-info" key={key}>
                                    <div className="info-ctn">
                                        <div className="item-left">
                                            <div className="year">{res.year}</div>
                                            <div className="nameLibelle">{res.nameLibelle}</div>
                                            <div className="name">{res.name[key]}</div>
                                        </div>
                                        <div className="item-right">
                                            <div className="type">{res.type}</div>
                                        </div>
                                    </div>
                                   <div className="text">{res.text}</div>
                                </div>
                            ))}
                        </React.Fragment>
                    }

            </div>
        );
    }
}
export default Project;
