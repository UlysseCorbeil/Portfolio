import React from 'react';
import { NavLink } from "react-router-dom";
import ErrorSvg from '../images/404.png'

class ErrorPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languageByUrl: this.props.languageByUrl,
            dataError: [],
            intervalIsSet: false,
            done: undefined
        }
    }

    componentDidMount() {

        // data init
        this.getErrorDataFromDb();

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

    getErrorDataFromDb = async () => {
        setTimeout(() => {
            fetch('http://localhost:3001/api/getErrorData')
                .then((data) => {
                    setTimeout(() => {
                        this.setState({ done: true, percent: data });
                    });
                    return data.json();
                })
                .then((res) => this.setState({ dataError: res.data }));
        });
    }

    render() {
        const { dataError } = this.state;
        return (
            <div className="page">
                {dataError.map((res, key) => (
                    <div className="module">
                        <div className="ctn" key={key}>
                            <div className="back-button">
                                <NavLink to={'/' + this.state.languageByUrl} className="link">
                                    <div class="lg-change">Back</div>
                                </NavLink>
                            </div>
                            <div className="title">{res.title}</div>
                            <div className="error-img">
                                <img src={ErrorSvg} alt='error 404'/>
                            </div>
                            <div className="message">{res.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ErrorPage;
