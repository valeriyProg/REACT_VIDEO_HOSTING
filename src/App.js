import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import './components/Header/Header.scss'
import HomePage from "./pages/Home-page/HomePage";
import VideoDetailPage from "./pages/Video-Detail-page/VideoDetailPage";
import AboutPage from "./pages/About-page/AboutPage";
import MainPageLayout from "./pages/Main-Page-layout/MainPageLayout";
import HelpPage from "./pages/Help-page/HelpPage";

class App extends Component{

    render() {
        return (
            <Router>
                <Header />
                <main className='content main-content row'>
                    <div id="page" className="full-width m-centered">
                        <Switch>
                            <Route path="/watch" component={VideoDetailPage}/>
                            <Route path="/ERROR" component={AboutPage}/>
                            <MainPageLayout>
                                <Route exact path="/" component={HomePage}/>
                                <Route exact path="/help" component={HelpPage}/>
                                <Route exact path="/about" component={AboutPage}/>
                            </MainPageLayout>
                        </Switch>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;
