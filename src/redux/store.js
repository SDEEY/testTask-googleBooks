import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import booksMainPage from "./reducers/booksMainPage-reducer";
import bookPage from "./reducers/bookPage-reducer";

let reducers = combineReducers({
    booksMainPage,
    bookPage
})

export const store = createStore(reducers, applyMiddleware(thunk))

