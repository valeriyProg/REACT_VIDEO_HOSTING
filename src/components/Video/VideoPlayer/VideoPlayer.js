import React, {Component} from "react";
import PropTypes from "prop-types";

const url = 'http://localhost:3100/';
class VideoPlayer extends Component{

    render() {
        return(
            <div className="video-player">
                <div className="inner">
                    <video width="100%" height="300" controls="controls" poster={  url + 'video/' + this.props.screen }>
                        { this.props.videoData.map((item, index) => ( <source key={index} src={ item.source } type={ item.type }/>))}
                    </video>
                </div>
            </div>
        );
    }
}

VideoPlayer.propTypes = {
    screen: PropTypes.string.isRequired,
    videoData: PropTypes.arrayOf(PropTypes.shape({
            source:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
        })).isRequired,
};

export default VideoPlayer;
