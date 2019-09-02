import React from 'react';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-list">
                <div className="sectionTitle">Project I've worked on</div>
                {this.props.data.map((res, i) => (
                    <a className="links js-hover-project" href={'/projets/' + res.id}>
                        <img data-src="../images/vlec.png" className="imageProjet_list" />
                        <div className="project-item" key={i}>
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