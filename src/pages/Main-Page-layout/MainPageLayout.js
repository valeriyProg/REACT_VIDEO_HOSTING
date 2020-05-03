import React, {Component} from "react";
import {connect} from "react-redux";
import AsideMenu from "../../components/AsideMenu/AsideMenuContainer";
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";


class MainPageLayout extends Component{
    constructor(props) {
        super(props);

        this._bodyRef = document.querySelector('body');
    }

    componentDidMount() {
        this._bodyRef.style.overflow = 'auto';
        this.props.setAsideBarConfig({
            display: true,
            bodyOverflow: 'auto',
            transitioned:  false
        });
    }

    render() {
        return (
            <div className="row no-wrap">
                <div className="column col-1-6">
                    <AsideMenu/>
                </div>
                <div id="page-container" className='page-container col-5-6'>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...asideBarMappers.mapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
    ...asideBarMappers.mapDispatchToProps(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageLayout);


