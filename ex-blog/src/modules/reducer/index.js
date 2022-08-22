import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import postsReducer from './posts'

export default combineReducers ({
    pender: penderReducer,
    posts : postsReducer 
})