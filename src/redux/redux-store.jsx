import { combineReducers, createStore } from "redux"
import DialogReducer from "./DialogReducer"
import ProfileReducer from "./ProfileReducer"

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogReducer

})
const store = createStore(reducers)

window.store = store;

export default store;