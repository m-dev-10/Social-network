import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ProfileInfoButton from "../../../Buttons/ProfileButton/ProfileInfoButton";
import s from './ProfileInfoForm.module.scss'


interface formTypes {
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription?: string
	aboutMe: string
}

interface Props {
	saveProfileSelected: (data: any) => void
	profile: any
}

const ProfileInfoForm: FC<Props> = ({ saveProfileSelected, profile }) => {
	const [localDataJob, setLocalDataJob] = useState()
	const { register,
		handleSubmit,
		formState: { errors, },
	} = useForm<formTypes>({
	})

	const onSubmit: SubmitHandler<formTypes> = data => {
		saveProfileSelected(data)
	}


	return (<div>
		<form onSubmit={handleSubmit(onSubmit)} className={s.profileInfoForm}>
			<div><span>name: </span><input {...register('fullName'
			)} placeholder="name" defaultValue={profile.fullName} id={"fullName"} /></div>

			<div><span>lookingForAJob: </span>
				<input  {...register('lookingForAJob'
				)} type={"checkbox"} id={"lookingForAJob"} /></div>

			<div><span>LookingForAJobDescription: </span>
				<input  {...register('lookingForAJobDescription'
				)} placeholder="LookingForAJobDescription" defaultValue={profile.lookingForAJobDescription} id={"LookingForAJobDescription"} /></div>

			<div><span>about me: </span>
				<input  {...register('aboutMe'
				)} placeholder="about me" id={"aboutMe"} defaultValue={profile.aboutMe} /></div>
			<ProfileInfoButton text={"Save"} />
		</form>
	</div>)
}


export default ProfileInfoForm