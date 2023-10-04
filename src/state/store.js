import { applyMiddleware,combineReducers,createStore } 
from "redux";
import thunk from "redux-thunk";
import {carReducer} from "./reducers/carReducer"

const reducers = combineReducers({
    cars:carReducer
})

const initailState = {};

export const store = createStore(reducers,initailState,applyMiddleware(thunk));