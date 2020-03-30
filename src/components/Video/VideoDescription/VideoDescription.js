import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchData} from "../../../services/httpService";

let url = 'http://localhost:3100/';

class VideoDescription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        }
    }

   componentDidMount() {
        fetchData(url + 'description/' + this.props.description_id, null, this);
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.description_id !== this.props.description_id) {
            fetchData(url + this.props.description_id, null, this);
        }
   }

    render() {
        let component = this.state.data ? <p>{ this.state.data.description.text }</p> : <span>loader</span>;
        return (
            <div>
                { component }
            </div>
        );
    }
}

VideoDescription.propTypes = {
    description_id: PropTypes.number.isRequired,
};

export default VideoDescription;
