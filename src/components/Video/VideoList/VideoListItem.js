import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import http from "../../../services/httpService";

const url = 'http://localhost:3100/';

class VideoListItem extends Component{
    constructor(props) {
        super(props);
        this._isMounted = false;

        this.state = {
            videoData: this.props.initialVideoData,
            channelInfo: undefined
        }
    }

    componentDidMount() {
        this._isMounted = true;

        http.get(url+ 'channel/' + this.state.videoData.channel_id)
            .then(response => response.json())
            .then(value => {
                this.setState({
                    ...this.state,
                    channelInfo: value
                });
            })
            .catch(e => console.log(e));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let channel;
        let rowClasses = [this.props.row ? undefined : 'row no-wrap space-between' ];
        if (this.state.channelInfo) {
            channel =  <a  href={"/channel/" + this.state.videoData.channel_id} className='channel-link' title={ this.state.channelInfo.description.name }>
                <span>{ this.state.channelInfo.description.name }</span></a>
        }

        return (
            <div className={['video-item'].concat(rowClasses).join(' ') }>
                <div className="col-1-2">
                    <Link to={"/watch?v="+ this.state.videoData.id}>
                        <img src={ this.state.videoData.screen } alt="preloader"/>
                    </Link>
                </div>
                <div className="col-1-2 detail">
                    <Link  to={"/watch?v="+ this.state.videoData.id} title={ this.state.videoData.title }>
                        <h2>{ this.state.videoData.title }</h2>
                    </Link>
                    { channel }
                    <Link to={"/watch?v="+ this.state.videoData.id}>
                        <span>{ this.state.videoData.watch } &#8226; views</span>
                    </Link>
                </div>
            </div>
        );
    }
}

VideoListItem.propTypes = {
    initialVideoData: PropTypes.object.isRequired,
    row: PropTypes.bool,
};

export default VideoListItem;
