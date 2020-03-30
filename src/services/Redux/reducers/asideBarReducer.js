import {hideSidebar, setAsideBarConfig, showSidebar} from "../actions";
import {HIDE_SIDEBAR, SET_ASIDE_BAR_CONFIG, SHOW_SIDEBAR} from "../actions-types";

const initialState = {
    display: false,
    bodyOverflow: 'auto',
    transitioned:  0.5
};

export function asideBarReducer(state = initialState, actions) {
    switch (actions.type) {
        case SET_ASIDE_BAR_CONFIG:
            return  {
                bodyOverflow: actions.config.bodyOverflow,
                display:  actions.config.display,
                transitioned: actions.transitioned
            };
        case SHOW_SIDEBAR:
            return {
                bodyOverflow: actions.transitioned ? 'hidden' : 'auto',
                display: true,
                transitioned: actions.transitioned
            };
        case HIDE_SIDEBAR:
            return {
                bodyOverflow: 'auto',
                display: false,
                transitioned: actions.transitioned
            };
        default:
            return  initialState;
    }
}

export const asideBarMappers = {
    mapStateToProps: state => ( {
        bodyOverflow: state.asideBar.bodyOverflow,
        display: state.asideBar.display,
        transitioned: state.asideBar.transitioned
    }),
    mapDispatchToProps: (dispatch) => ({
        showAsideBar: (duration = 0.5) => dispatch(showSidebar(duration)),
        hideSideBar:  (duration = 0.5) => dispatch(hideSidebar(duration)),
        setAsideBarConfig:  (config) => dispatch(setAsideBarConfig(config)),
    })
};
