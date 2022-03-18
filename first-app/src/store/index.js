import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { infoReducers } from "./reducers/infoReducers"

const rootReducer = combineReducers({
    info: infoReducers,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))