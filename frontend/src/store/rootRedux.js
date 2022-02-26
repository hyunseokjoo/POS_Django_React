import { combineReducers } from "redux";
import jwtReducer from './jwt';

const rootReducer = combineReducers({
    jwtReducer
});

export default rootReducer;