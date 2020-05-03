import {LOG_IN, LOG_OUT} from "../actions-types";
import {setUserData} from "../actions";

const initialState = {
    userData: undefined
};

export function userReducer(state=initialState, actions) {
    switch (actions.type) {
        case LOG_IN: return  {
            userData: actions.userData
        };
        case LOG_OUT: return  {
            userData: undefined
        };
        default: return initialState;
    }
}

export const userMappers = {
    mapStateToProps: state => ({
        userData: state.user.userData
    }),
    mapDispatchToProps: (dispatch) => ({
        setUserData: (userData) => dispatch(setUserData(userData)),
    })
};
