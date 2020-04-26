import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import http from "../../../services/httpService";
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import {ViewMode} from "../../../services/ViewModeEnum";

import './VideoItem.scss';
import MenuBar from "./MenuBar";
import dateFormatter from "../../../services/dateFormatter";

const url = 'http://localhost:3100/';

class VideoItem extends Component{
    constructor(props) {
        super(props);
        this._isMounted = false;

        this.state = {
            videoData: undefined,
            channelInfo: undefined,
            viewMode: this.props.viewMode || ViewMode.column,
            isMenuBarShow: false
        }
    }

    componentDidMount() {
        this._isMounted = true;

        http.get(url + 'video/' + this.props.videoId)
            .then(value => value.json())
            .then(value => {
                if (this._isMounted) {
                    this.setState({
                        videoData: value
                    });
                    this.getUserData(this.state.videoData.channel_id);
                }
            })
    }

    getUserData = id => {
        http.get(url +'channel/user?_id=' + id)
            .then(value => value.json())
            .then(value => {
                if (this._isMounted) {
                    this.setState({
                        channelInfo: value
                    });
                }
            });
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let itemClasses = {
            mainClasses: this.state.viewMode === ViewMode.column ? 'video-item item-column' : 'video-item row no-wrap space-between',
            screenClasses: this.state.viewMode === ViewMode.column ? 'screen': 'screen col-1-2',
            descriptionWrapperClasses: this.state.viewMode === ViewMode.column ? 'row space-between detail' : "detail col-1-2" ,
            descriptionClasses: this.state.viewMode === ViewMode.column ? 'column col-4-5' : 'column'
        };

        return ( <> { this.state.videoData ? this.renderDownloadedVideoItem(itemClasses) : this.renderPreloadVideoTemplate(itemClasses) } </> )
    }

    renderDownloadedVideoItem = itemClasses => (
        <div className={ itemClasses.mainClasses }>
            <div className={ itemClasses.screenClasses }>
                <Link to={"/watch?v="+ this.state.videoData._id}>
                    <img src={ url + 'video/' + this.state.videoData.screen }  alt="preloader"/>
                </Link>
            </div>
            <div className={ itemClasses.descriptionWrapperClasses }>
                { this.state.viewMode === ViewMode.column && <div className="column col-1-5"><UserAvatar userData={this.state.channelInfo}/></div> }
                <div className={ itemClasses.descriptionClasses }>
                    <Link  to={"/watch?v="+ this.state.videoData._id} title={ this.state.videoData.title }>
                        <h2>{ this.state.videoData.title }</h2>
                    </Link>
                    <Link to={"/watch?v="+ this.state.videoData._id}>
                        <span>{ this.state.videoData.watch } &#8226; views</span>
                    </Link>
                    { !this.state.channelInfo ? <div className="description default-preloader"/> :
                        <Link to={"/channel/user?_id="+ this.state.videoData.channel_id}><span>{ this.state.channelInfo.name }</span></Link>
                    }
                    <Link to={"/watch?v="+ this.state.videoData._id}>
                        <span>{ dateFormatter(this.state.videoData.date)} </span>
                    </Link>
                    { this.state.viewMode === ViewMode.column ?
                        <div className="menu-bar-wrapper"><MenuBar initViewState={false}/></div> : undefined }
                </div>
            </div>
        </div>
    );

    renderPreloadVideoTemplate = itemClasses => (
        <div className={ itemClasses.mainClasses }>
            <div className={ itemClasses.screenClasses }>
                <div className="screen default-preloader"/>
            </div>
            <div className={ itemClasses.descriptionWrapperClasses }>
                { this.state.viewMode === ViewMode.column && <div className="column col-1-5"><UserAvatar data={this.state.channelInfo}/></div> }
                <div className={ itemClasses.descriptionClasses }>
                    <div className="title default-preloader"/>
                    <div className="description default-preloader"/>
                    { this.state.viewMode === ViewMode.column ?
                        <div className="menu-bar-wrapper"><MenuBar initViewState={false}/></div> : undefined }
                </div>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    videoId: PropTypes.string.isRequired,
    viewMode: PropTypes.string,
};

export default VideoItem;
