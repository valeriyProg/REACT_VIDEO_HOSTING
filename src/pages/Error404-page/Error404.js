import React, {Component} from "react";
import http from "../../services/httpService";

export default class Error404 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: http
        }
    }

    render() {
        return(
            <div>
            </div>
        );
    }
}
