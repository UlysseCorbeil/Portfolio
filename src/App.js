import React, { Component } from 'react';

// views
import ProjectList from './views/ProjectList';
import Header from './views/Header';

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

    getProjectsFromDb = () => {
        fetch('http://localhost:3001/api/getProjetsData')
            .then((data) => data.json())
            .then((res) => this.setState({ dataProjects: res.data }));
    }

    getHeaderInfoFromDb = async () => {
        fetch('http://localhost:3001/api/getHeaderInfo')
            .then((data) => data.json())
            .then((res) => this.setState({ dataHeader: res.data }));
    }


    render() {
        return (
            <div id="site">
                <div className="page">
                    <div className="header-wrapper">
                        <Header data={this.state.dataHeader} />
                    </div>
                    <div className="project-list-wrapper">
                        <ProjectList data={this.state.dataProjects} />
                    </div>
                </div>
            </div>
        )
    }

}
export default App;