import s from './BooksSearch.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setBooksMainPageTC, setBooksTitle, setIsLoading} from "../../../redux/reducers/booksMainPage-reducer";
import {useState} from "react";

export default function BooksSearch(props) {
    const [inputOnFocus, setInputOnFocus] = useState(false)

    const orderBy = useSelector(state => state.booksMainPage.orderBy)
    const category = useSelector(state => state.booksMainPage.category)
    const startIndex = useSelector(state => state.booksMainPage.startIndex)

    const dispatch = useDispatch()

    const getBooks = (e) => {
        e.preventDefault()

        const title = e.target[0].value

        if (title) {
            props.setHeaderPressedToTheTop(true)
            dispatch(setIsLoading(true))
            dispatch(setBooksTitle(title))
            dispatch(setBooksMainPageTC(title, category, orderBy, startIndex))
        } else {
            alert('Empty search field')
        }
    }

    return (
        <div className={s.booksSearch}>
            <h1>Search for books</h1>
                <form onFocus={() => setInputOnFocus(!inputOnFocus)}
                      onBlur={() => setInputOnFocus(!inputOnFocus)}
                      style={inputOnFocus ? {outline: '2px solid black'} : null}
                      onSubmit={getBooks}
                >
                    <input type={'text'}/>
                    <button type={'submit'}>show</button>
                </form>
        </div>

    )
}