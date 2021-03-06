import React from 'react';
import { Link } from "react-router-dom";
import Helpers from '../modules/util/Helpers';

import Reveal from '../modules/Reveal';
import Hover from '../modules/Hover';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl,
            dataProjects: [],
            sectionTitle: [],
            intervalIsSet: false,
            done: undefined
        }
    }

    componentDidMount() {

        // data init
        this.getProjectsFromDb();
        this.getSectionTitle();

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

    getProjectsFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getProjetsData')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true, percent: data });
                    });
                    return data.json();
                })
                .then((res) => {
                    this.setState({ dataProjects: res.data })
                })
        });
    }

    getSectionTitle = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getSectionTitle')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true, percent: data });
                    });
                    return data.json();
                })
                .then((res) => {
                    res.data.map(async (v) => {
                        if (v.lg === this.state.languageByUrl) {
                            this.setState({ sectionTitle: v })
                        }
                    })
                })
        });
    }

    render() {
        const { dataProjects, sectionTitle, languageByUrl } = this.state;

        return (
            <div className="project-list">

              <div className="sectionTitle">{sectionTitle.title}</div>

              {dataProjects.filter(res => res.lg === languageByUrl).map((res, key) => (

                <Reveal 
                  className="fade-in-section"
                  key={key}
                  threshold={0}
                  rootMargin={'100px'}
                >
                    <div className="project-wrapper">
                        <Hover className="project-item">
                          <Link to={{
                            pathname:'/' + languageByUrl + '/' + Helpers.cleanString(res.nomProjet) + '/'
                            }}
                            className="link"
                          >
                                <div className="inner-ctn">
                                    <div className="header">
                                        <div className="number">0{res.id + 1}</div>
                                        <div className="name">{res.nomProjet}</div>
                                    </div>
                                    <div className="item-ctn">
                                        <div className="categ">{res.categProjet}</div>
                                        <div className="roles">{res.roles}</div>
                                        <div className="date">{res.date}</div>
                                    </div>
                                </div>
                            </Link>
                        </Hover>
                    </div>
                </Reveal>
            ))}

            </div>
        )
    }
}
export default ProjectList;
