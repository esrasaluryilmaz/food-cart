import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducers from "./reducers/restaurantReducers";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

//combineReducers ile reducerlari bir root reducera cevir
const rootReducer = combineReducers({ restaurantReducers, cartReducer });

//createstore ile store olsurtur
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
