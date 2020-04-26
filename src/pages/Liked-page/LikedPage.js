import React, {Component} from 'react';
import VideoList from "../../components/Video/VideoList/VideoList";
import {ViewMode} from "../../services/ViewModeEnum";
import './LikedPage.scss';
import {UserContext} from "../../components/Store/Store";

class LikedPage extends Component {
    renderList = (list) => {
        return <>
            <div className="row">
                <div className="column">
                    <div className="title">
                        <h1>Liked videos</h1>
                        <p>
                            <span>{  this.context.likedVideosId.length  } videos</span>
                        </p>
                    </div>
                </div>
             </div>
            <div className="row">
                { list }
            </div>
        </>
    };
    renderNoList = () => {
        return <div className="row">
            <div className="column">
                <h1>Liked videos</h1>
                <p>
                    <span>No liked videos found...</span>
                </p>
            </div>
        </div>
    };
    render() {
        console.log(this.context);
        document.title = 'Liked Videos - Media Canoe';
        let result;
        if (this.context) {
            result = this.context.likedVideosId.length > 0 ?  <VideoList videosId={this.context.likedVideosId} viewMode={ ViewMode.row }/> : false;

            return (
                <React.Fragment>
                    <div id="liked-page" className='page-content'>
                        { result ? this.renderList(result) : this.renderNoList() }
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <div id="liked-page" className='page-content'>
                    <div className="row">
                        <div className="column">
                            <h1>Liked videos</h1>
                            <p>
                                <span>Loading...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

LikedPage.contextType = UserContext;

export default LikedPage;

