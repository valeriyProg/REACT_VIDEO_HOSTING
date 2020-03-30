import React, {Component} from "react";
import VideoList from "../../components/Video/VideoList/VideoList";
import './HomePage.scss';
import {connect} from "react-redux";
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list : undefined
        }
    }
    componentDidMount() {
        this.props.showAsideBar();
    }

    render() {
        let styles = {
            content: {
                padding: '20px 0'
            }
        };

        return (
            <React.Fragment>
                <div id="home-page" className='list-container'>
                    <div style={ styles.content }>
                        <VideoList row={ true }/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(asideBarMappers.mapStateToProps, asideBarMappers.mapDispatchToProps)(HomePage);
