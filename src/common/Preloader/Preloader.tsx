import React from 'react'
import preloader from '../../assets/Preloader/Preloader.svg'
import s from './Preloader.module.scss'


const Preloader = () => {
	return (
		<div className={s.preloader}><img src={preloader} alt="preloader" /></div>
	)
}

export default Preloader