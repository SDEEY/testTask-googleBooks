import {useSelector} from "react-redux";
import s from './BookPage.module.css'
import {NavLink} from "react-router-dom";

export default function BookPage() {
    const info = useSelector(state => state.bookPage.info)
    console.log(info)
    return (
        <div className={s.bookInfoContainer}>
            <div>
                <img src={info.volumeInfo.imageLinks ? info.volumeInfo.imageLinks.thumbnail : 'http://i.imgur.com/J5LVHEL.jpg'} alt={'imgBook'}/>
            </div>
            <div>
                <p>
                    {info.volumeInfo.categories ?
                            info.volumeInfo.categories.map((el, index) => (index ? ', ' : '') + el) : null}
                </p>
                <p>
                    {info.volumeInfo.title ? info.volumeInfo.title : null}
                </p>
                <p>
                    {info.volumeInfo.authors ?
                        info.volumeInfo.authors.map((el, index) => (index ? ', ' : '') + el) : null}
                </p>
                <p>
                    {info.searchInfo.textSnippet ? info.searchInfo.textSnippet : null}
                </p>
            </div>
            <NavLink className={s.buttonClose} to={'/'}>✕</NavLink>
        </div>
    )
}