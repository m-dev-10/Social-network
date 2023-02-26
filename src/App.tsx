import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Dispatch } from 'redux';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import { authThunk } from './Redux/ThunkCreators';


const App = () => {

	const dispatch = useDispatch<Dispatch<any>>()
	useEffect(
		() => {
			dispatch(authThunk())
		}, []
	)

	return (
		<div className="AppWrapper">
			<Header />
			<div className="AppWrapper__items">
				<SideBar />
				<div className="AppWrapper__content">
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route path="/dialogs" element={<Dialogs />} />
						<Route path="/login" element={<LoginForm />} />
					</Routes>
				</div>
			</div>
		</div >
	);
}

export default App;
