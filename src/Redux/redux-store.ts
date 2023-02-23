import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import ProfileReducer, { StateProfileReducer } from './ProfileReducer'
import thunkMiddleware from 'redux-thunk'

export type Store = {
	ProfilePage: StateProfileReducer
}


let redurers = combineReducers({
	ProfilePage: ProfileReducer
})

const store = createStore(redurers, applyMiddleware(thunkMiddleware))



export default store