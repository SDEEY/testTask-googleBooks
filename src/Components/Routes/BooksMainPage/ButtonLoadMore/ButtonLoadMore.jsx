import s from "./ButtonLoadMore.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setBooksLoadMoreTC, setIsLoading} from "../../../../redux/reducers/booksMainPage-reducer";

export default function ButtonLoadMore(){
    const title = useSelector(state => state.booksMainPage.title)
    const orderBy = useSelector(state => state.booksMainPage.orderBy)
    const category = useSelector(state => state.booksMainPage.category)
    const startIndex = useSelector(state => state.booksMainPage.startIndex)


    const dispatch = useDispatch()

    const getBooksLoadMore = () => {
        let index = startIndex + 30

        dispatch(setIsLoading(true))
        dispatch(setBooksLoadMoreTC(title, category, orderBy, index))
    }

    return(
        <div className={s.loadMoreButtonContainer}>
            <button onClick={getBooksLoadMore}>Load more</button>
        </div>
    )
}