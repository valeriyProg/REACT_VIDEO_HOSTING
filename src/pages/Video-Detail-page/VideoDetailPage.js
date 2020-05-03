import React, {Component} from "react";
import PropTypes from 'prop-types';
import './VideoDetailPage.scss'
import DetailVideoContainer from "../../components/Video/DetailVideoContainer/DetailVideoContainer";
import VideoList from "../../components/Video/VideoList/VideoList";
import {connect} from "react-redux";
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";
import AsideMenu from "../../components/AsideMenu/AsideMenuContainer";
import {ViewMode} from "../../services/ViewModeEnum";
import http from "../../services/httpService";
import {localhostURL, templates} from "../../environments";
import LoaderTemplate from "../../components/LoaderTemplate/LoaderTemplate";
import {windowLocationMappers} from "../../services/Redux/reducers/windowLocationReducer";

class VideoDetailPage extends Component {
    constructor(props) {
        super(props);

        this._isMounted = false;
        this._mouseOnArea = false;
        this._bodyRef = document.querySelector('body');

        this.state = {
            videoId: undefined,
            recommendList: undefined,
            count: 10
        };
    }

    componentDidMount() {
        this._isMounted = true;

        let query = new URLSearchParams(window.location.search);
        this.setState({
            videoId: query.get('v')
        });

        this.props.setAsideBarConfig({
            display: false,
            bodyOverflow: 'auto',
            transitioned:  0.5
        });

        window.addEventListener('click', this.hideMenuHandler, false);

        http.get(localhostURL + 'video/get?count=' + this.state.count)
            .then(response => response.json())
            .then(response => response.map(item => item._id))
            .then(list => {
                if (this._isMounted) {
                    this.setState({
                        recommendList : list
                    });
                }
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('UPDATE');
        let query = new URLSearchParams(window.location.search);
        let videoId = prevState.videoId ? prevState.videoId.toString(): prevState.videoId;
        if ( query.get('v') !== videoId) {
            this.setState({
                videoId: query.get('v')
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('click', this.hideMenuHandler, false);
    }

    hideMenuHandler = e => {
      if (this.props.display && this._mouseOnArea) {
          this.props.hideSideBar(this.props.transitioned);
          this._bodyRef.style.overflow =  'auto';
      }
    };

    renderList = () => (<VideoList videosId={this.state.recommendList} viewMode={ ViewMode.column }/>);

    render() {
        let asideStyles = { visibility:  this.props.display ? 'visible' : 'hidden' };
        if (this.state.recommendList) {
            return (
                <React.Fragment>
                    <div>
                        <div className="aside-bar-area" style={ asideStyles }
                             onMouseEnter={e=> this._mouseOnArea = true}
                             onMouseLeave={e => this._mouseOnArea = false}/>
                        <AsideMenu/>
                    </div>
                    <div className='row space-between m-centered col-4-5'>
                        <div className='column col-2-3'>
                            <div className="inner video-wrapper">
                                { this.state.videoId ?  <DetailVideoContainer key={this.state.videoId} videoId={ this.state.videoId }/> : <LoaderTemplate template={ templates.detailVideoPage }/> }
                            </div>
                        </div>
                        <div className='column col-1-3'>
                            <div className="inner list-wrapper">
                                { this.state.recommendList ? this.renderList() : <div className="default-preloader"/> }
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return (<div/>);
    }
}

VideoDetailPage.propTypes  = {
    match: PropTypes.object,
    location: PropTypes.object,
};

const mapStateToProps = (state) => ({
    ...asideBarMappers.mapStateToProps(state),
    // ...windowLocationMappers.mapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
    ...asideBarMappers.mapDispatchToProps(dispatch),
    // ...windowLocationMappers.mapDispatchToProps(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetailPage);
