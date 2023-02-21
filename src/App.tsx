import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';


const App = () => {
	return (
		<div className="AppWrapper">
			<Header />
			<div className="AppWrapper__items">
				<SideBar />
				<div className="AppWrapper__content">
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route path="/dialogs" element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</div >
	);
}

export default App;
