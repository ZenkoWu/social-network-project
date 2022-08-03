import { combineReducers, createStore } from "redux"
import DialogReducer from "./DialogReducer"
import FindUsersReducer from "./FindUsersReducer"
import ProfileReducer from "./ProfileReducer"

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogReducer,
    usersPage: FindUsersReducer

})
const store = createStore(reducers)

window.store = store;

export default store;