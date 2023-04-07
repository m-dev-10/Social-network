import { FC, useState } from "react"
import s from './Paginator.module.scss'
import cn from "classnames"
import { setCurrentPage } from "../../Redux/ActionCreators";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import UserButton from "../../components/Buttons/UserButton/UserButton";


interface Props {
	portionSize: number
	currentPage: number,
	totalItemsCount: number,
	pageSize: number
}



const Paginator: FC<Props> = ({ portionSize = 10, currentPage, totalItemsCount, pageSize, }) => {

	const dispatch = useDispatch<Dispatch<any>>()

	let pagesCount = Math.ceil(totalItemsCount / pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return <div className={s.paginator}>
		{portionNumber > 1 &&
			<UserButton text={"PREV"} callback={() => { setPortionNumber(portionNumber - 1) }} />}
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
	</div>
}

export default Paginator