import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './SideBar.module.scss'
import arrowIconBlack from '../../assets/images/SideBarImages/arrowIconBlack.svg'



const SideBar = () => {
	const [checkbox, setCheckbox] = useState(false)

	return (
		<div className={`${s.sidebar} ${checkbox && s.sidebar__move}`}>
			<div title={'Я профайл'} className={`${s.item} ${s.item__profile}`}>
				<NavLink className={s.link} to="/profile">Profile</NavLink>
			</div>
			{/* <div className={`${s.item} ${s.item__messages}`}>
				<NavLink className={s.link} to="/dialogs">Messages</NavLink>
			</div> */}
			<div className={`${s.item} ${s.item__users}`}>
				<NavLink className={s.link} to="/users">Users</NavLink>
			</div>
			<div className={`${s.item} ${s.item__settings}`}>
				<NavLink className={s.link} to="/settings">Settings</NavLink>
			</div>
			<label>
				<input onChange={() => setCheckbox(prev => !prev)} type={'checkbox'} checked={checkbox} className={s.checkbox} />
				<div className={`${s.sidebar__arrow} ${checkbox && s.sidebar__arrow_move}`}  ><img src={arrowIconBlack} alt="arrowSideBar" /></div>
			</label>
		</div>
	)
}



export default SideBar