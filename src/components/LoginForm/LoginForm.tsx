import React, { FC, FormEvent, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Dispatch } from 'redux'
import { loginThunk } from "../../Redux/ThunkCreators"
import FormButton from "../Buttons/FormButton/FormButton"
import s from './LoginForm.module.scss'
// import { Store } from "../../Redux/redux-store";


interface formTypes {
	email: string
	password: string
	checkbox: boolean
}


const LoginForm = () => {

	// const auth = useSelector((state: Store) => state.auth)

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
		dispatch(loginThunk(data.email, data.password, data.checkbox))
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
						})} id={"email"} placeholder={"Write your email..."} className={s.input} type="text" />
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
						})} id={"password"} className={s.input} placeholder={"Write your password..."} type="password" />
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
				{/* {props.captchaUrl && <img src={props.captchaUrl} />}
			{props.captchaUrl && <Field placeholder="write symbols" name={"captcha"} component={Input} validate={[required, maxLengthCreator(30)]} />}
			{props.error && <div className={s.errorForm}>{props.error}</div>} */}
				<FormButton text={"LOGIN"} />
			</form>
		</div>
	</div>
}


export default LoginForm