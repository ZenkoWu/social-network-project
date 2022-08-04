import { combineReducers, createStore } from "redux"
import AuthReducer from "./authReducer"
import DialogReducer from "./DialogReducer"
import FindUsersReducer from "./FindUsersReducer"
import ProfileReducer from "./ProfileReducer"

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogReducer,
    usersPage: FindUsersReducer,
    auth: AuthReducer

})
const store = createStore(reducers)

window.store = store;

export default store;