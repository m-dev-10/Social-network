import { FC, useEffect, useState } from "react"
import s from './Paginator.module.scss'
import cn from "classnames"
import { setCurrentPage } from "../../Redux/ActionCreators";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { requestUsersThunk } from "../../Redux/ThunkCreators";
import DefaultButton from "../../components/Buttons/DefaultButton";
import UserButton from "../../components/Buttons/UserButton/UserButton";


interface Props {
	portionSize: number
	currentPage: number,
	totalItemsCount: number,
	pageSize: number,
	// onPageChanged: () => void
}



const Paginator: FC<Props> = ({ portionSize = 10, currentPage, totalItemsCount, pageSize, }) => {

	const dispatch = useDispatch<Dispatch<any>>()
	useEffect(
		() => {
			dispatch(requestUsersThunk(currentPage, 10))
		}, [currentPage]
	)



	let pagesCount = Math.ceil(totalItemsCount / pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}



	let portionCount = Math.ceil(pagesCount / portionSize)
	// let [portionNumber, setPortionNumber] = useState(1)
	const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize
	return <div className={s.paginator}>
		{portionNumber > 1 &&
			<UserButton text={"PREV"} callback={() => { setPortionNumber(portionNumber - 1) }} />}
		{/* // <button className={`${s.paginationButton} ${s.leftButton}`} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>} */}
		{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map((p) => {
				return <span
					onClick={(e) => dispatch(setCurrentPage(p))}
					className={cn({
						[s.selectedPage]: currentPage === p
					}, s.pageNumber)}>{p}</span>
			}
			)}
		{portionCount > portionNumber && <UserButton text={"NEXT"} callback={() => { setPortionNumber(portionNumber + 1) }} />}
		{/* <button className={`${s.paginationButton} ${s.rightButton}`} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>} */}
	</div>
}


export default Paginator