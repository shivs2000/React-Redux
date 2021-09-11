import cakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";
import { combineReducers } from "redux";
const RootReducer=combineReducers({
    
    cake:cakeReducer,
    iceCream:iceCreamReducer
});
export default RootReducer;