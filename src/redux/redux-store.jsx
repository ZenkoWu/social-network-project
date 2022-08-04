import { applyMiddleware, combineReducers, createStore } from "redux"
import AuthReducer from "./authReducer"
import DialogReducer from "./DialogReducer"
import FindUsersReducer from "./FindUsersReducer"
import ProfileReducer from "./ProfileReducer"
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogReducer,
    usersPage: FindUsersReducer,
    auth: AuthReducer

})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;