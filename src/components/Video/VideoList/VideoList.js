import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";
import './VideoList.scss';
import PropTypes from "prop-types";
import {fetchData} from "../../../services/httpService";

const url = 'http://localhost:3100/';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;

        this.state = {
            data: undefined,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetchData(url + 'video/', null, this);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let listClasses = ['video-list'].concat( this.props.row ? 'row flex-wrap space-between' : 'column').join(' ');
        let list;
        if (this.state.data ) {
            list = this.state.data.map((item, index) => {
                return <li key={ index }><VideoListItem row={this.props.row} initialVideoData={ item }/></li>
            });
        }

        return (
            <ul className={ listClasses }  >
                { list ? list : <li>loading</li> }
            </ul>
        );
    }
}

VideoList.propTypes = {
    row: PropTypes.bool,
};

export default VideoList;
