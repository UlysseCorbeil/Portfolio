import React from 'react';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-list">
                {this.props.data.map((res, i) => (
                    <a className="links" href={'/projets/' + res.id}>
                        <div className="project-item js-hover-project" key={i}>
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

                        </div>
                    </a>
                ))}
            </div>
        );
    }
}
export default ProjectList;