import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import './components/Header/Header.scss'
import HomePage from "./pages/Home-page/HomePage";
import VideoDetailPage from "./pages/Video-Detail-page/VideoDetailPage";
import AboutPage from "./pages/About-page/AboutPage";
import MainPageLayout from "./pages/Main-Page-layout/MainPageLayout";
import HelpPage from "./pages/Help-page/HelpPage";
import LikedPage from "./pages/Liked-page/LikedPage";
import HistoryPage from "./pages/History-page/HistoryPage";
import WatchLaterPage from "./pages/Watch-Later-page/WatchLaterPage";
import SubscriptionsPage from "./pages/Subscriptions-page/SubscriptionsPage";
import http from "./services/httpService";
import Store from "./components/Store/Store";
import AddVideoPage from "./pages/Video-Add-page/AddVideoPage";


class App extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            userId: '5e9b8cf9ae858e36340756db',
            userData: undefined
        }
    }

    componentDidMount() {
        http.get('http://localhost:3100/channel/user?_id=' + this.state.userId)
            .then(value => value.json())
        // .then(value => value.text()).then(value => console.log(value))

            .then(value => {
                this.setState({
                    userData: value
                })
            }).catch(reason => {
                console.log(reason);
        });
    }

    render() {
        return (
                <Router>
                    <Store userInfo={this.state.userData}>
                        <Header />
                    </Store>
                    <main className='content main-content row'>
                        <div id="page" className="full-width m-centered">
                            <Store userInfo={this.state.userData}>
                                <Switch>
                                    <Route path="/watch" render={(match, location) => (
                                        <Store userInfo={this.state.userData} >
                                            <VideoDetailPage match={match} location={location}/>
                                        </Store>)}/>
                                    <Route path="/ERROR" component={AboutPage}/>
                                    <MainPageLayout>
                                        <Route exact path="/" component={HomePage}/>
                                        <Route exact path="/help" component={HelpPage}/>
                                        <Route exact path="/about" component={AboutPage}/>
                                        <Route exact path="/liked" render={props => (
                                            <Store userInfo={this.state.userData} >
                                                <LikedPage/>
                                            </Store>)}
                                        />
                                        <Route exact path="/history" component={HistoryPage}/>
                                        <Route exact path="/video/add" render={props => (
                                            <Store userInfo={this.state.userData} >
                                                <AddVideoPage/>
                                            </Store>)}
                                        />
                                        <Route exact path="/watch-later" component={WatchLaterPage}/>
                                        <Route exact path="/subscriptions" component={SubscriptionsPage}/>
                                    </MainPageLayout>
                                </Switch>
                            </Store>
                        </div>
                    </main>
                </Router>
        );
    }
}

export default  App;
