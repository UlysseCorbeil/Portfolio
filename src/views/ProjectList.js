import React from "react";

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="header-ctn">
                {this.props.data.map((res, i) => (
                    <div className="header-item" key={i} > {res.nomProjet}</div>
                ))}
            </div>
        );
    }
}
export default ProjectList;