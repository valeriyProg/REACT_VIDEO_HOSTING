import React, {Component} from 'react';
import PropTypes from 'prop-types';
import http, {fetchData} from "../../../services/httpService";

let url = 'http://localhost:3100/';

class VideoDescription extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;

        this.state = {
            videoData: undefined
        }
    }

   componentDidMount() {
       this._isMounted= true;
       http.get(url + 'description/'+ this.props.description_id)
           .then(value => value.json())
           .then(value => {
               if (this._isMounted) {
                   this.setState({
                       videoData: value
                   });
               }
           });
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.description_id !== this.props.description_id) {
            http.get(url + 'description/'+ this.props.description_id)
                .then(value => value.json())
                .then(value => {
                    if (this._isMounted) {
                        this.setState({
                            videoData: value
                        });
                    }
                });
        }
   }

   componentWillUnmount() {
        this._isMounted = false;
   }

    render() {
        let component = this.state.videoData ? <p>{ this.state.videoData.text[0] }</p> : <span>loader</span>;
        return (
            <div>
                { component }
            </div>
        );
    }
}

VideoDescription.propTypes = {
    description_id: PropTypes.string.isRequired,
};

export default VideoDescription;
