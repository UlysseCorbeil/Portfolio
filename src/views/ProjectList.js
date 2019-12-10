import React from 'react';
import LoadingSVG from '../svg/LoadingSVG';
import { NavLink } from "react-router-dom";
import Helpers from '../modules/util/Helpers';

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
        const { dataProjects, sectionTitle, language } = this.state;

        return (
            <div className="project-list module">

              {dataProjects.filter(res => res.lg === this.state.languageByUrl).map((res, key) => (

                <div className="project-wrapper" data-aos="fade-up" key={key}>
                    <NavLink to={'/' + this.state.languageByUrl + '/' + Helpers.cleanString(res.nomProjet) + '/'} className="link">
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
                    </NavLink>
                </div>
            ))};

            </div>
        );
    }
}
export default ProjectList;
