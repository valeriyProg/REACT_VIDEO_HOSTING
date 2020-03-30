import React, {Component} from "react";
import './VideoDetailPage.scss'
import DetailVideoContainer from "../../components/Video/DetailVideoContainer/DetailVideoContainer";
import VideoList from "../../components/Video/VideoList/VideoList";
import {connect} from "react-redux";
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";
import AsideMenu from "../../components/AsideMenu/AsideMenu";

class VideoDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: undefined,
        };
    }

    componentDidMount() {
        let query = new URLSearchParams(window.location.search);
        this.setState({
            videoId: query.get('v')
        });

        this.props.setAsideBarConfig({
            display: false,
            bodyOverflow: 'auto',
            transitioned:  0.5
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let query = new URLSearchParams(window.location.search);
        let videoId = prevState.videoId ? prevState.videoId.toString(): prevState.videoId;
        if ( query.get('v') !== videoId) {
            this.setState({
                videoId: query.get('v')
            });
        }
    }

    render() {
        let asideStyles = { visibility:  this.props.display ? 'visible' : 'hidden' };
        return (
            <React.Fragment>
                <div>
                    <div className="aside-bar-area" style={ asideStyles }/>
                    <AsideMenu/>
                </div>
                <div className='row space-between m-centered col-4-5'>
                    <div className='column col-2-3'>
                        <div className="inner video-wrapper">
                            { this.state.videoId ?  <DetailVideoContainer videoId={ this.state.videoId }/> : 'loading...' }
                        </div>
                    </div>
                    <div className='column col-1-3'>
                        <div className="inner list-wrapper">
                            <VideoList/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(asideBarMappers.mapStateToProps, asideBarMappers.mapDispatchToProps)(VideoDetailPage);
