import React, {Component} from 'react';
import './DetailVideoContainer.scss'

import UserLink from "../../User/UserLink";
import Views from "../ViewInfo/ViewInfo";
import VideoRateButton from "../VideoRate/VideoRateButton";
import PropTypes from "prop-types";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentsContainer from "../VideoComments/CommentsContainer";
import http from "../../../services/httpService";
import VideoDescription from "../VideoDescription/VideoDescription";
import SubscribeButton from "../../UI/SubscribeButton/SubscribeButton";
import RateSlider from "../../UI/RateSlider/RateSlider";
import {connect} from "react-redux";
import {userMappers} from "../../../services/Redux/reducers/userReducer";
import {UserContext} from "../../Store/Store";
import {localhostURL, templates} from "../../../environments";
import LoaderTemplate from "../../LoaderTemplate/LoaderTemplate";


class DetailVideoContainer extends Component {
    constructor(props) {
        super(props);

        this._isMounted = false;

        this.state = {
            videoData: undefined,
            rate: undefined,
            likeCount: undefined,
            dislikeCount: undefined
        };

        this.toggleLike = this.toggleLike.bind(this);
        this.toggleDislike = this.toggleDislike.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        http.get(localhostURL + 'video/watch?v='+ this.props.videoId)
            .then(value => value.json())
            .then(value => {
                if (this._isMounted) {
                    let index = this.context.likedVideosId.findIndex(item=> item === value._id);

                    this.setState({
                        videoData: value,
                        rate: index >= 0 ? 1 : -1,
                        likeCount: value.likeCount,
                        dislikeCount: value.dislikeCount
                    });
                }
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevState.videoData);
        if (prevState.videoData && this.props.videoId !== prevState.videoData._id.toString() ) {
            http.get(localhostURL + 'video/watch?v='+ this.props.videoId)
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

    toggleLike() {
        if (this.state.rate === 1) {
            return this.setState({
                rate: -1,
                likeCount: this.state.likeCount - 1
            })
        }

        this.setState({
            rate: 1,
            likeCount: this.state.likeCount + 1,
            dislikeCount: this.state.rate > -1 ? this.state.dislikeCount - 1: this.state.dislikeCount,
        })
    }
    toggleDislike() {
        if (this.state.data.rate === 0) {
            return this.setState({
                rate: -1,
                dislikeCount: this.state.dislikeCount - 1
            })
        }

        this.setState({
            rate: 0,
            dislikeCount: this.state.dislikeCount + 1,
            likeCount: this.state.rate > -1 ? this.state.likeCount - 1: this.state.likeCount,
        });
    }

    render() {
        if (this.state.videoData) {
            document.title = this.state.videoData.title + ' - Media';
            console.log(this.state.videoData);
            console.log(this.context);
            return (
                <div className="detail-video">
                    <div className="row">
                        <div className="column TEMP">
                            {/* VIDEO PLAYER */}
                            { this.renderVideoPlayer() }
                        </div>
                    </div>
                    <div className="row">
                        <div className="column video-meta description-wrapper">
                            {/* VIDEO META INFO */}
                            { this.renderVideoTitle() }
                            { this.renderVideoInfo() }
                        </div>
                    </div>
                    <div className="row description-wrapper">
                        { this.renderVideoDescription() }
                    </div>
                    <div className="row">
                        {/* VIDEO COMMENTS CONTAINER */}
                        <CommentsContainer userId={this.context._id} commentsId={this.state.videoData.comments_id} />
                    </div>
                </div>
            );
        }

        return (<LoaderTemplate template={ templates.detailVideoPage }/>);
    }

    renderVideoPlayer = () => (
        <VideoPlayer key={ this.state.videoData._id } screen={ this.state.videoData.screen }
                     videoData={ [{ source: 'http://localhost:3100/video/' + this.state.videoData.filename, type: 'video/mp4' }] }/>);

    renderVideoTitle = () => (
        <div className="video-title">
            <h1 className="title">{this.state.videoData.title}</h1>
        </div>
    );

    renderVideoInfo = () => (
        <div className="row space-between">
            <div className="column">
                {/* VIEWS */}
                <Views data={this.state.videoData}/>
            </div>
            <div className="column">
                <div className="row space-between rate-container">
                    {/* LIKE BUTTON */}
                    <VideoRateButton initialRateType={ 1 } selected={ this.state.rate === 1 }
                                     data={ this.state } onClick={ this.toggleLike } />
                    {/* DISLIKE BUTTON */}
                    <VideoRateButton initialRateType={ 0 } selected={ this.state.rate === 0 }
                                     data={ this.state } onClick={ this.toggleDislike } />
                </div>
                <div className="row">
                    <RateSlider value={95} selected={ this.state.videoData.rate >= 0 }/>
                </div>
            </div>
        </div>
    );

    renderVideoDescription = () => (
        <div className="video-description">
            <div className="row space-between no-wrap">
                {/* CHANNEL BLOCK */}
                <div className="column">
                    <UserLink  initialUserId={this.state.videoData.channel_id}/>
                </div>
                <div className="column">
                    <SubscribeButton isSubscribe={true} onClick={ e => console.log('Subs')}/>
                </div>
            </div>
            <div className="row description-text">
                <VideoDescription key={this.state.videoData.description_id} description_id={ this.state.videoData.description_id } />
            </div>
        </div>
    );
}

DetailVideoContainer.contextType = UserContext;

DetailVideoContainer.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default  connect(userMappers.mapStateToProps, userMappers.mapDispatchToProps) (DetailVideoContainer);
