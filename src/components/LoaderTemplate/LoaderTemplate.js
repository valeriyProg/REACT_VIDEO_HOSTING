import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './LoaderTemplate.scss';

class LoaderTemplate extends Component {

    render() {
        let result;

        if (this.props.template) {
            switch (this.props.template) {
                case 'detailVideoPage':
                    result = this.renderDetailVideoPageLoader();
                    break;
                default:
                    result = <div/>
            }
        }
        return ( result );
    }

    renderDetailVideoPageLoader = () => (
        <div className="video-template">
           <div className="row">
               <div className="video-player default-preloader"/>
           </div>
            <div className="row">
                <div className="video-meta description-wrapper default-preloader"/>
            </div>
            <div className="row">
                <div className="description-wrapper default-preloader"/>
            </div>
            <div className="row">
                <div className="comment-wrapper default-preloader"/>
            </div>
        </div>
    );
}

LoaderTemplate.propTypes = {
    template: PropTypes.string.isRequired,
};

export default LoaderTemplate;
