import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class WatchLaterPage extends Component {
    render() {
        document.title = 'Watch Later - Media Canoe';
        return (
            <React.Fragment>
                <div id="liked-page" className='page-content'>
                    <div>
                        Watch-Later-page
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

WatchLaterPage.propTypes = {};

export default WatchLaterPage;
