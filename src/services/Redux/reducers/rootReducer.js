import {combineReducers} from "redux";
import {asideBarReducer} from "./asideBarReducer";
import {windowLocationReducer} from "./windowLocationReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    asideBar: asideBarReducer,
    windowLocation: windowLocationReducer,
    user: userReducer
});
