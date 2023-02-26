import React, { FormEvent, useState } from "react"
// import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Dispatch } from 'redux'
import { loginThunk } from "../../Redux/ThunkCreators"
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



	return <div>
		<div>golovin.10174@gmail.com</div>
		<div>Shareman-29055</div>
		<form onSubmit={submit}>
			<input onChange={(e) => setLogin(e.target.value)} value={login} type="text" />
			<div>	<input onChange={(e) => setPassword(e.target.value)} value={password} type="password" /></div>
			<input checked={checkbox} onChange={() => setCheckbox(prev => !prev)} type="checkbox" />
			{/* {props.captchaUrl && <img src={props.captchaUrl} />}
			{props.captchaUrl && <Field placeholder="write symbols" name={"captcha"} component={Input} validate={[required, maxLengthCreator(30)]} />}
			{props.error && <div className={s.errorForm}>{props.error}</div>} */}
			<div><button>log in</button></div>
		</form>
		{/* <button onClick={() => console.log(auth)
		}>test</button> */}
	</div>
}


export default LoginForm