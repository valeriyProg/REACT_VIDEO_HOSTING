import React, {Component} from "react";
import {connect} from "react-redux";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import {asideBarMappers} from "../../services/Redux/reducers/asideBarReducer";
import {windowLocationMappers} from "../../services/Redux/reducers/windowLocationReducer";


class MainPageLayout extends Component{
    constructor(props) {
        super(props);

        this._bodyRef = document.querySelector('body');
        this.state = {
            list : undefined,
        }
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
                <div className="column col-1-5">
                    <AsideMenu/>
                </div>
                <div id="page-container" className='page-container col-4-5'>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...asideBarMappers.mapStateToProps(state),
    ...windowLocationMappers.mapStateToProps(state)
});

const mapDispatchToProps = (dispatch) => ({
    ...asideBarMappers.mapDispatchToProps(dispatch),
    ...windowLocationMappers.mapDispatchToProps(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageLayout);


