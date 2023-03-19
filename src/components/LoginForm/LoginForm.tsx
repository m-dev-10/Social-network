import React, { FormEvent, useState } from "react"
// import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Dispatch } from 'redux'
import { loginThunk } from "../../Redux/ThunkCreators"
import FormButton from "../Buttons/FormButton/FormButton"
import s from './LoginForm.module.scss'
// import { Store } from "../../Redux/redux-store";

const LoginForm = () => {

	// const auth = useSelector((state: Store) => state.auth)

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [checkbox, setCheckbox] = useState(false)


	const dispatch = useDispatch<Dispatch<any>>()


	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('start');
		dispatch(loginThunk(login, password, checkbox))
		console.log('end');
		setLogin('')
		setPassword('')
		setCheckbox(false)
	}



	return <div className={s.form} >
		<div className={s.formContainer}>
			<div className={s.formTitle}>
				<h1>Please login to continue</h1>
			</div>
			<div className={s.data}>golovin.10174@gmail.com  qwer1234 </div>
			<form onSubmit={submit}>
				<div className={s.fromItem}>
					<label className={s.label} htmlFor={"name"}>Email</label>
					<input id={"name"} placeholder={"Write your email..."} className={s.input} onChange={(e) => setLogin(e.target.value)} value={login} type="text" />
				</div>
				<div className={s.fromItem}>
					<label className={s.label} htmlFor={"password"}>Password</label>
					<input id={"password"} className={s.input} placeholder={"Write your password..."} onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
				</div>
				<div className={s.fromItem}>
					<input id={"check"} checked={checkbox} onChange={() => setCheckbox(prev => !prev)} type="checkbox" />
					<label className={s.label} htmlFor={"check"}>Remember me</label>
				</div>
				{/* {props.captchaUrl && <img src={props.captchaUrl} />}
			{props.captchaUrl && <Field placeholder="write symbols" name={"captcha"} component={Input} validate={[required, maxLengthCreator(30)]} />}
			{props.error && <div className={s.errorForm}>{props.error}</div>} */}
				<FormButton text={"LOGIN"} />
			</form>
		</div>
	</div>
}


export default LoginForm