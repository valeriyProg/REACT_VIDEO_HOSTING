import React, {Component} from "react";
import http from "../../services/httpService";

class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: http
        }
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
            </div>

        );
    }
}

export default AboutPage;
