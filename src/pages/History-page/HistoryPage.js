import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class HistoryPage extends Component {
    render() {
        document.title = 'History - Media Canoe';
        return (
            <React.Fragment>
                <div id="history-page" className='page-content'>
                    <div>
                        History-page
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

HistoryPage.propTypes = {};

export default HistoryPage;
