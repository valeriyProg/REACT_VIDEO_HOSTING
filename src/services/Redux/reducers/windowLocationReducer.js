import {setWindowLocation} from "../actions";
import {SET_WINDOW_LOCATION} from "../actions-types";

let url = new URL('http://localhost:3000');

const initialState = {
    location: url
};

export const initialStateLocation = {
    location: url
};

export function windowLocationReducer(state = initialState, action) {
    if (action.type === SET_WINDOW_LOCATION) {
        return ({
            location: new URL(action.location)
        });
    }

    return ({
        location: url
    });
}

export const windowLocationMappers = {
    mapStateToProps: state => ({
        location: state.windowLocation.location
    }),
    mapDispatchToProps: (dispatch) => ({
        setWindowLocation: () => dispatch(setWindowLocation(new URL(window.location))),
    })
};
