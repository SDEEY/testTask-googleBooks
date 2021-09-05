import s from './BooksMainPage.module.css'
import {useSelector} from "react-redux";
import BookMainPage from "./BookMainPage/BookMainPage";
import ButtonLoadMore from "./ButtonLoadMore/ButtonLoadMore";
import Preloader from "../../Preloader/Preloader";

export default function BooksMainPage() {
    const books = useSelector(state => state.booksMainPage.books)
    const totalBooks = useSelector(state => state.booksMainPage.totalBooks)
    const isLoading = useSelector(state => state.booksMainPage.isLoading)

    return (
        books ?
            <div className={s.booksContainer}>
                <div className={s.totalBooksDiv}>
                    {`Found ${totalBooks - 1} results`}
                </div>
                {isLoading ? <Preloader/> : null}
                    <>
                        <div className={s.booksMainBlockContainer}>
                            {books.map(el => <BookMainPage key={el.etag}
                                                           id={el.id}
                                                           info={el}
                                                           imgUrl={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : 'http://i.imgur.com/J5LVHEL.jpg'}
                                                           title={el.volumeInfo.title ? el.volumeInfo.title : null}
                                                           categories={el.volumeInfo.categories ? el.volumeInfo.categories[0] : null}
                                                           authors={el.volumeInfo.authors ? el.volumeInfo.authors : []}
                            />)}

                        </div>
                        <ButtonLoadMore/>
                    </>
            </div> : <div style={{backgroundColor: '#442121',}} className={s.totalBooksDiv}>Not found</div>
    )
}