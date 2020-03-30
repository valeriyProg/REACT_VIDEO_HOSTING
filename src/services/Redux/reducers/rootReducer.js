import {combineReducers} from "redux";
import {asideBarReducer} from "./asideBarReducer";
import {windowLocationReducer} from "./windowLocationReducer";

export const rootReducer = combineReducers({
    asideBar: asideBarReducer,
    windowLocation: windowLocationReducer,
});
