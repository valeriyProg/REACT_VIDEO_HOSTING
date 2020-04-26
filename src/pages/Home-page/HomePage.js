import React, {Component} from "react";
import VideoList from "../../components/Video/VideoList/VideoList";
import './HomePage.scss';
import {connect} from "react-redux";
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";
import {ViewMode} from "../../services/ViewModeEnum";
import http from "../../services/httpService";

const url = 'http://localhost:3100/';


class HomePage extends Component{
    constructor(props) {
        super(props);

        this._isMounted = false;

        this.state = {
            list : undefined,
            count: 10
        }
    }
    componentDidMount() {
        this._isMounted = true;

        this.props.showAsideBar();

        http.get(url + 'video/get?count=' + this.state.count)
            .then(response => response.json())
            .then(response => response.map(item => item._id))
            .then(list => {
                if (this._isMounted) {
                    this.setState({
                        list
                    });
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        document.title = 'Media Canoe';

        let styles = {
            content: {
                padding: '20px 0'
            }
        };

        console.log(this.state.list);
        return (
            <React.Fragment>
                <div id="home-page" className='list-container'>
                    <div style={ styles.content }>
                        <h1 className="title">Recommend</h1>
                        { this.state.list ? this.renderList() : <h1>No videos found...</h1> }
                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderList = () => (<VideoList videosId={this.state.list} viewMode={ ViewMode.row }/>);
}

export default connect(asideBarMappers.mapStateToProps, asideBarMappers.mapDispatchToProps)(HomePage);
