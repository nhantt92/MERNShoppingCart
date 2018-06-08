import {productReducer} from "./ProductReducer";
import {cartReducer} from "./CartReducer";
import {combineReducers} from "redux";

export default combineReducers({productReducer, cartReducer});