import s from './BooksSorting.module.css'
import {
    setBooksMainPageTC,
    setBooksOrderBy,
    setBooksTitle,
    setIsLoading
} from "../../../redux/reducers/booksMainPage-reducer";
import {useDispatch, useSelector} from "react-redux";

export default function BooksSorting() {
    const title = useSelector(state => state.booksMainPage.title)
    const category = useSelector(state => state.booksMainPage.category)
    const startIndex = useSelector(state => state.booksMainPage.startIndex)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (title) {
            e.preventDefault()

            const orderBy = e.target.value

            dispatch(setIsLoading(true))
            dispatch(setBooksOrderBy(orderBy))
            dispatch(setBooksTitle(title))
            dispatch(setBooksMainPageTC(title, category, orderBy, startIndex))
        } else {
            alert('Empty search field')
        }
    }

    return (
        <div className={s.booksSorting}>
            <p>Sorting by</p>
            <select defaultValue={'relevance'} onChange={handleChange}>
                <option value={'relevance'}>relevance</option>
                <option value={'newest'}>newest</option>
            </select>
        </div>
    )
}