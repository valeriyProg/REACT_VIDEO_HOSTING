import {
    SET_WINDOW_LOCATION,
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    SET_ASIDE_BAR_CONFIG,
    LOG_IN
} from "./actions-types";

export const showSidebar  = (duration=0.5) => {
    return {
        type: SHOW_SIDEBAR,
        transitioned: duration
    }
};

export const hideSidebar = (duration=0.5) => {
    return {
        type: HIDE_SIDEBAR,
        transitioned: duration
    };
};

export const setAsideBarConfig = (settings) => {
    return {
        type: SET_ASIDE_BAR_CONFIG,
        config: settings
    };
};

export const setWindowLocation = (url = '/') => ({
    type: SET_WINDOW_LOCATION,
    location: url
});

// export const setVideoRate = (rate = undefined) => ({
//    type: SET_VIDEO_RATE,
//    rate
// });

export const setUserData = data => ({
   type: LOG_IN,
   userData: data
});
