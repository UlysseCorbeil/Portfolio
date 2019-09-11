import React, { Component } from 'react';

// views
import ProjectList from './views/ProjectList';
import Header from './views/Header';
import LoadingSVG from './svg/LoadingSVG';

class App extends Component {

    // initialize our state
    state = {
        dataHeader: [],
        dataProjects: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        done: undefined,
    };

    componentDidMount() {

        // data init
        this.getProjectsFromDb();
        this.getHeaderInfoFromDb();

        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getProjectsFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getProjetsData')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 1000);
                    return data.json();
                })
                .then((res) => this.setState({ dataProjects: res.data }));
        }, 1200);
    }

    getHeaderInfoFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getHeaderInfo')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 1000);
                    return data.json();
                })
                .then((res) => this.setState({ dataHeader: res.data }));
        }, 1200);
    }


    render() {
        return (
            <div className="site" >
                {
                    !!!this.state.done ? (
                        <LoadingSVG />
                    ) : (
                            <div className="page">
                                <div className="header-wrapper">
                                    <Header data={this.state.dataHeader} />
                                </div>
                                <div className="project-list-wrapper">
                                    <ProjectList data={this.state.dataProjects} />
                                </div>
                            </div>
                        )
                }
            </div >
        )
    }

}
export default App;