import React, {Component} from 'react';
import VideoItem from "./VideoItem";
import './VideoList.scss';
import PropTypes from "prop-types";
import {ViewMode} from "../../../services/ViewModeEnum";

class VideoList extends Component {
    render() {
        let listClasses = ['video-list'].concat( this.props.viewMode === ViewMode.row ? 'row flex-wrap' : 'column').join(' ');

        return (
            <ul className={ listClasses } >
                { this.props.videosId.map((item, index) => {
                    return <li key={ ''+index + this.props.userId }>
                        <VideoItem viewMode={this.props.viewMode === ViewMode.row ? ViewMode.column : ViewMode.row} videoId={ item }/>
                    </li>
                })}
            </ul>
        );
    }
}

VideoList.propTypes = {
    viewMode: PropTypes.string,
    videosId: PropTypes.arrayOf(PropTypes.string,).isRequired,
};

export default  VideoList;
