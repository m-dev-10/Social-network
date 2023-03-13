import React, { FC, useEffect } from "react";

interface Props {
	status: string
	// deletePost: () => void
}



const ProfileStatus: FC<Props> = ({ status }) => {

	return (
		<div>
			<div><span>{status || '------'}</span></div>
			<div><input autoFocus={true} type="text" /></div>
		</div>
	)
}


export default ProfileStatus