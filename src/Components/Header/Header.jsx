import s from './Header.module.css'
import BooksSearch from "./BooksSearch/BooksSearch";
import BooksSorting from "./BooksSorting/BooksSorting";
import CategoryBooksFilter from "./CategoryBooksFilter/CategoryBooksFilter";
import {useState} from "react";

export default function Header(){
    const [headerPressedToTheTop, setHeaderPressedToTheTop] = useState(false)

    return(
        <header className={ `${s.header} ${headerPressedToTheTop ? s.headerIsPressedToTheTop : null}`}>
            <div>
                <BooksSearch setHeaderPressedToTheTop={setHeaderPressedToTheTop}/>
                <div className={s.headerDiv}>
                    <CategoryBooksFilter/>
                    <BooksSorting/>
                </div>
            </div>
        </header>
    )
}