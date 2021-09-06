import s from './CategoryBooksFilter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setBooksCategory, setBooksMainPageTC, setIsLoading} from "../../../redux/reducers/booksMainPage-reducer";


export default function CategoryBooksFilter(){
    const title = useSelector(state => state.booksMainPage.title)
    const orderBy = useSelector(state => state.booksMainPage.orderBy)
    const startIndex = useSelector(state => state.booksMainPage.startIndex)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(title){
            e.preventDefault()

            const category = e.target.value

            dispatch(setIsLoading(true))

            if (category === 'all') {
                dispatch(setBooksCategory(''))
                dispatch(setBooksMainPageTC(title, '', orderBy, startIndex))
            } else {
                dispatch(setBooksCategory(category))
                dispatch(setBooksMainPageTC(title, category, orderBy, startIndex))
            }
        } else {
            alert('Empty search field')
        }
    }

    return(
        <div className={s.categoryBooksFilter}>
            <p>Categories</p>
            <select defaultValue={'all'} onChange={handleChange}>
                <option value={'all'}>all</option>
                <option value={'art'}>art</option>
                <option value={'biography'}>biography</option>
                <option value={'computers'}>computers</option>
                <option value={'history'}>history</option>
                <option value={'medical'}>medical</option>
                <option value={'poetry'}>poetry</option>
            </select>
        </div>
    )
}