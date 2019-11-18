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
            <div className="module">
                {
                    <div className="project">
                        <NavLink to='/'>
                            <div>back</div>
                        </NavLink>
                        <div style={{ width: '100%', height: '500px' }}>
                            <img src={this.returnProjectImage()} alt="nom projet" />
                        </div>
                        {dataWorks.map((res, key) => (
                            <div className="project-header" data-aos="fade-up" key={key}>
                                <div className="ctn">
                                    <div className="nomProjet">{this.returnMatchedProjectData(res.id, res.nomProjet)}</div>
                                    <div className="year">{this.returnMatchedProjectData(res.id, res.year)}</div>
                                    <div className="nameLibelle">{this.returnMatchedProjectData(res.id, res.nameLibelle)}</div>
                                    <div className="name">{this.returnMatchedProjectData(res.id, res.name[0])}</div>
                                    <div className="type">{this.returnMatchedProjectData(res.id, res.type)}</div>
                                    <div className="text">{this.returnMatchedProjectData(res.id, res.text)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );
    }
}
export default Project;