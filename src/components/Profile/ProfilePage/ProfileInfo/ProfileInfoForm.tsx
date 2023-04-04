import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ProfileInfoButton from "../../../Buttons/ProfileButton/ProfileInfoButton";
import s from './ProfileInfoForm.module.scss'


interface formTypes {
	fullName: string
	lookingForAJob: boolean
	LookingForAJobDescription: string
	aboutMe: string
	saveProfileSelected: (fullName: string, lookingForAJob: boolean, LookingForAJobDescription: string, aboutMe: string) => void
}

interface Props {
	// profile?: any,
	goToEditMode: () => void
	saveProfileSelected: (data: any) => void
}


const ProfileInfoForm: FC<Props> = ({ goToEditMode, saveProfileSelected }) => {

	const { register,
		handleSubmit,
		formState: { errors, },
		reset
	} = useForm<formTypes>({
	})

	const onSubmit: SubmitHandler<formTypes> = data => {
		console.log('data1', data)
		saveProfileSelected(data)
	}



	return (<div>
		<form onSubmit={handleSubmit(onSubmit)} className={s.profileInfoForm}>
			<div><span>name: </span><input {...register('fullName'
			)} placeholder="name" id={"fullName"} /></div>

			<div><span>lookingForAJob: </span><input {...register('lookingForAJob'
			)} type={"checkbox"} id={"lookingForAJob"} /></div>

			<div><span>LookingForAJobDescription: </span><input {...register('LookingForAJobDescription'
			)} placeholder="LookingForAJobDescription" id={"LookingForAJobDescription"} /></div>

			<div><span>about me: </span><input {...register('aboutMe'
			)} placeholder="about me" id={"aboutMe"} /></div>

			<ProfileInfoButton callback={goToEditMode} text={"Save"} />
			{/* <button type={"submit"} className={s.button}>Save</button> */}
		</form>
	</div>)
}



export default ProfileInfoForm