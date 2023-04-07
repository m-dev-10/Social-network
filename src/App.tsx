import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Dispatch } from 'redux';
import './App.css';
import Preloader from './common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginForm from './components/LoginForm/LoginForm';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import Users from './components/Users/Users';
import NotFoundPage from './components/notFoundPage/notFoundPage';
import { Store } from './Redux/redux-store';
import { initializeAppThunk } from './Redux/ThunkCreators';


const App = () => {
	const initialized = useSelector((state: Store) => state.app.initialized)

	const dispatch = useDispatch<Dispatch<any>>()
	useEffect(
		() => {
			dispatch(initializeAppThunk())
		}, []
	)

	if (!initialized) {
		return <Preloader />
	}

	return (
		<div className="AppWrapper">
			<HeaderContainer />
			<div className="AppWrapper__items">
				<SideBar />
				<div className="AppWrapper__content">
					<Routes>
						<Route path="/" element={<Navigate to="/profile" />} />
						{/* <Route path="/dialogs" element={<Dialogs />} /> */}
						<Route path="/users" element={<Users />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/profile/:userId?/*" element={<Profile />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</div >
	);
}

export default App;
