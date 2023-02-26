import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import ProfileReducer, { StateProfileReducer } from './ProfileReducer'
import thunkMiddleware from 'redux-thunk'
import DialogsReducer, { StateDialogsReducer } from "./DialogsReducer"
import AuthReducer, { StateAuthReducer } from "./AuthReducer"

export type Store = {
	ProfilePage: StateProfileReducer,
	DialogsPage: StateDialogsReducer,
	auth: StateAuthReducer
}


let redurers = combineReducers({
	ProfilePage: ProfileReducer,
	DialogsPage: DialogsReducer,
	auth: AuthReducer
})

const store = createStore(redurers, applyMiddleware(thunkMiddleware))



export default store