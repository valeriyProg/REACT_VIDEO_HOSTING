import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Hamburger from "../Header/Hamburger/Hamburger";
import Logo from "../Header/Logo/Logo";
import './AsideMenu.scss';
import {historyIcon, homeIcon, laterIcon, likeIcon, subsIcon} from "../UI/svg-constants";
import MenuLink from "./MenuLink";

class AsideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentHeight: window.innerHeight - 55
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.menuSizeHandler, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.menuSizeHandler, false);
    }

    menuSizeHandler = debounce(e => {
            this.setState({
                contentHeight: window.innerHeight - 55
            });
        }, 100);

    render() {
        const styles = {
            logo: {
                alignSelf: 'center',
                width: '40px',
            }
        };

        return (
            <>
                <div className="aside-header bordered">
                    <div className="row">
                        <Hamburger styles={ styles.logo }/>
                        <Logo  path='/' styles={ styles.logo} />
                    </div>
                </div>
                <div className="aside-content" style={{ height: this.state.contentHeight + 'px'}}>
                    <div className="content-block bordered">
                        <ul className="aside-bar-list">
                            <li><MenuLink path={'/'} >{ homeIcon }Home</MenuLink></li>
                            <li> <MenuLink path={'/subscriptions'}>{ subsIcon }Subscriptions</MenuLink></li>
                        </ul>
                    </div>
                    <div className="content-block bordered">
                        <ul className="aside-bar-list">
                            <li><MenuLink path={'/history'} >{ historyIcon }History</MenuLink></li>
                            <li> <MenuLink path={'/liked'}>{ likeIcon }Liked</MenuLink></li>
                            <li><MenuLink path={'/watch-later'} >{ laterIcon }Watch Later</MenuLink></li>
                        </ul>
                    </div>
                    <div className="content-block bordered">
                        <span className="category-title">Subscriptions</span>
                    </div>
                    <div className="content-block bordered">
                        <ul className="aside-bar-footer-list">
                            <li><p>О сервисе Прессе Правообладателям Связаться с нами Авторам Рекламодателям Разработчикам</p></li>
                            <li><p>Условия использования Конфиденциальность Правила и безопасность Новые функции</p></li>
                            <li><span>© 2020 Google LLC</span></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

// AsideMenu.propTypes = {};

export default AsideMenu;
