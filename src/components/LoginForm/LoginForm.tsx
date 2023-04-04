import axios, { AxiosResponse } from "axios"
import React, { FC, FormEvent, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { Dispatch } from 'redux'
import Redirect from "../../Redux/Redirect"
import { Store } from "../../Redux/redux-store"
import { loginThunk } from "../../Redux/ThunkCreators"
import FormButton from "../Buttons/FormButton/FormButton"
import s from './LoginForm.module.scss'
// import { Store } from "../../Redux/redux-store";


interface formTypes {
	email: string
	password: string
	checkbox: boolean
	captcha: string
}


const LoginForm = () => {

	const auth = useSelector((state: Store) => state.auth)
	const captchaUrl = useSelector((state: Store) => state.auth.captchaUrl)
	// const [login, setLogin] = useState('')
	// const [password, setPassword] = useState('')
	// const [checkbox, setCheckbox] = useState(false)



	const dispatch = useDispatch<Dispatch<any>>()

	const { register,
		handleSubmit,
		formState: { errors, },
		reset
	} = useForm<formTypes>({
		mode: "onBlur"
	})

	const onSubmit: SubmitHandler<formTypes> = data => {
		alert('send')
		// const url = "https://social-network.samuraijs.com/api/1.0/auth/login"
		dispatch(loginThunk(data.email, data.password, data.checkbox, data.captcha,))
		reset()
	}

	// const submit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault()
	// 	console.log('start');
	// 	dispatch(loginThunk(login, password, checkbox))
	// 	console.log('end');
	// 	setLogin('')
	// 	setPassword('')
	// 	setCheckbox(false)
	// }onSubmit={submit}

	if (auth.isAuth) {
		return <Navigate to={"/profile"} />
	}
	return <div className={s.form} >
		<div className={s.formContainer}>
			<div className={s.formTitle}>
				<h1>Please login to continue</h1>
			</div>
			<div className={s.data}>golovin.10174@gmail.com  qwer1234 </div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={s.fromItem}>
					<label className={s.label} htmlFor={"email"}>Email</label>
					<input {...register('email',
						{
							required: "Email is require field",
							pattern: {
								value:
									/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
								message: "Please enter valid email"
							},
						})} style={{ border: errors.email && "2px solid red" }} id={"email"} placeholder={"Write your email..."} className={s.input} type="text" />
					{errors?.email && (<div style={{ color: "red", fontSize: 16 }}>{errors.email.message}</div>)}
				</div>
				<div className={s.fromItem}>
					<label className={s.label} htmlFor={"password"}>Password</label>
					<input {...register('password',
						{
							required: "password is require field",
							minLength: {
								value: 6,
								message: "password min length 5 symbols"
							}
						})} style={{ border: errors.password && "2px solid red" }} id={"password"} className={s.input} placeholder={"Write your password..."} type="password" />
					{errors?.password && (<div style={{ color: "red", fontSize: 16 }}>{errors.password.message}</div>)}

				</div>
				<div className={s.fromItem}>
					<input  {...register('checkbox',
						{
							required: "require checkbox",
						})} id={"check"} type="checkbox" />
					<label className={s.label} htmlFor={"check"}>Remember me</label>
					{errors?.checkbox && (<div style={{ color: "red", fontSize: 16 }}>{errors.checkbox.message}</div>)}
				</div>
				{captchaUrl && <img src={captchaUrl} />}
				{captchaUrl && <div><input className={s.captchaInput} {...register('captcha',
				)} placeholder={"Write symbols..."} type={"text"} /></div>}
				{/* {props.error && <div className={s.errorForm}>{props.error}</div>} */}
				<FormButton text={"LOGIN"} />
			</form>
		</div>
	</div>
}


export default LoginForm
