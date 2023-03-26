import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import ProfileReducer, { StateProfileReducer } from './ProfileReducer'
import thunkMiddleware from 'redux-thunk'
import DialogsReducer, { StateDialogsReducer } from "./DialogsReducer"
import AuthReducer, { StateAuthReducer } from "./AuthReducer"
import UsersReducer, { StateUsersReducer } from "./UsersReducer"
import appReducer, { StateAppReducer } from "./appReducer"

export type Store = {
	ProfilePage: StateProfileReducer,
	DialogsPage: StateDialogsReducer,
	auth: StateAuthReducer,
	UsersPage: StateUsersReducer,
	app: StateAppReducer
}


let reducers = combineReducers({
	ProfilePage: ProfileReducer,
	DialogsPage: DialogsReducer,
	auth: AuthReducer,
	UsersPage: UsersReducer,
	app: appReducer
})



declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// const store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store