import React, {Component} from 'react';
import './DetailVideoContainer.scss'

import UserLink from "../../User/UserLink";
import Views from "../ViewInfo/ViewInfo";
import VideoRateButton from "../VideoRate/VideoRateButton";
import PropTypes from "prop-types";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentsContainer from "../VideoComments/CommentsContainer";
import {fetchData} from "../../../services/httpService";
import VideoDescription from "../VideoDescription/VideoDescription";
import SubscribeButton from "../../UI/SubscribeButton/SubscribeButton";
import RateSlider from "../../UI/RateSlider/RateSlider";

const url = 'http://localhost:3100/';

class DetailVideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };

        this.toggleLike = this.toggleLike.bind(this);
        this.toggleDislike = this.toggleDislike.bind(this);
    }

    componentDidMount() {
        fetchData(url + 'video/watch?v='+ this.props.videoId, null, this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data && this.props.videoId !== prevState.data.id.toString() ) {
            fetchData(url + 'video/watch?v='+ this.props.videoId, null, this);
        }
    }

    toggleLike() {
        if (this.state.data.rate === 1) {
            return this.setState({
                data: {
                    ...this.state.data,
                    likeCount: this.state.data.likeCount - 1,
                    rate: -1
                }
            });
        }
        this.setState({
            data: {
                ...this.state.data,
                likeCount: this.state.data.likeCount + 1,
                dislikeCount: this.state.data.rate > -1 ? this.state.data.dislikeCount - 1: this.state.data.dislikeCount,
                rate: 1
            }
        });
    }
    toggleDislike() {
        if (this.state.data.rate === 0) {
            return this.setState({
                data: {
                    ...this.state.data,
                    dislikeCount: this.state.data.dislikeCount - 1,
                    rate: -1
                }
            });
        }
        this.setState({
            data: {
                ...this.state.data,
                dislikeCount: this.state.data.dislikeCount + 1,
                likeCount: this.state.data.rate > -1 ? this.state.data.likeCount - 1: this.state.data.likeCount,
                rate: 0
            }
        });
    }

    render() {
        let loader = <div>'Loading..'</div>;
        let component;
        if (this.state.data) {
            component = <React.Fragment>
                {/* VIDEO PLAYER */}
                <VideoPlayer key={ this.state.data.id } screen={ this.state.data.screen } videoData={ [{ source: 'http://localhost:3100/video/' + this.state.data.filename, type: 'video/mp4' }] }/>
                {/* VIDEO META INFO */}
                <div className="video-meta">
                    <div className="inner">
                        <div className="info">
                            <div className="row">
                                {/* VIDEO TITLE */}
                                <h1 className="title">{this.state.data.title}</h1>
                            </div>
                            <div className="row space-between">
                                <div className="column">
                                    {/* VIEWS */}
                                    <Views data={this.state.data}/>
                                </div>
                                <div className="column">
                                    <div className="row space-between rate-container">
                                        {/* LIKE BUTTON */}
                                        <VideoRateButton initialRateType={ 1 } selected={ this.state.data.rate === 1 }
                                                         data={ this.state.data } onClick={ this.toggleLike } />
                                        {/* DISLIKE BUTTON */}
                                        <VideoRateButton initialRateType={ 0 } selected={ this.state.data.rate === 0 }
                                                         data={ this.state.data } onClick={ this.toggleDislike } />
                                    </div>
                                    <div className="row">
                                        <RateSlider value={95}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <div className="row space-between no-wrap">
                                {/* CHANNEL BLOCK */}
                                <div className="column">
                                    <UserLink  initialUserId={this.state.data.channel_id}/>
                                </div>
                                <div className="column">
                                    <SubscribeButton isSubscribe={true} onClick={ e => console.log('Subs')}/>
                                </div>
                            </div>
                            <div className="row description-text">
                                <VideoDescription key={this.state.data.description_id} description_id={ this.state.data.description_id } />
                            </div>
                        </div>
                    </div>
                </div>
                {/* VIDEO COMMENTS CONTAINER */}
                <CommentsContainer commentsId={this.state.data.comments_id} />
            </React.Fragment>;
        }
        return ( component ? component : loader );
    }
}

DetailVideoContainer.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default DetailVideoContainer;
