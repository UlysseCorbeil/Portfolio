import React from 'react';
import { NavLink } from "react-router-dom";

import vlec from '../images/vlec.png';
import bonsound from '../images/bonsound.png';
import sandalwood from '../images/sandalwood.jpg';
import jez from '../images/jez.jpg';
import folespoir from '../images/folespoir.jpg';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languageByUrl: this.props.languageByUrl,
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
            pKey === key ? rightImage = image : undefined
        ))
        return rightImage;
    }

    returnMatchedProjectData = (key, data) => {
        return this.state.pKey === key ? data : undefined
    }

    render() {
        const { dataWorks } = this.state;
        return (
            <div className="page">
                <div className="module">
                    {
                        <div className="project">
                            <NavLink to={'/' + this.state.languageByUrl + '/'}>
                                <div>back</div>
                            </NavLink>
                            <div class="project-header">
                                {dataWorks.map((res, key) => (
                                    <div className="project-header-title" data-aos="fade-up" key={key}>
                                        <div className="ctn">
                                            <div className="title-ctn">
                                                <div className="nom-projet">{this.returnMatchedProjectData(res.id, res.nomProjet)}</div>
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
                            {dataWorks.map((res, key) => (
                                <div className="project-header-info" data-aos="fade-up" key={key}>
                                    <div className="info-ctn">
                                        <div className="item-left">
                                            <div className="year">{this.returnMatchedProjectData(res.id, res.year)}</div>
                                            <div className="nameLibelle">{this.returnMatchedProjectData(res.id, res.nameLibelle)}</div>
                                            <div className="name">{this.returnMatchedProjectData(res.id, res.name[0])}</div>
                                            <div className="text">{this.returnMatchedProjectData(res.id, res.text)}</div>
                                        </div>
                                        <div className="item-right">
                                            <div className="type">{this.returnMatchedProjectData(res.id, res.type)}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                </div>
            </div>
        );
    }
}
export default Project;