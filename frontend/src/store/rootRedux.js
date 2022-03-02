import { combineReducers } from "redux";
import jwtReducer from './jwt';
import selectedItemReducer from "./selectedItemList";

const rootReducer = combineReducers({
    jwtReducer,
    selectedItemReducer
});

export default rootReducer;