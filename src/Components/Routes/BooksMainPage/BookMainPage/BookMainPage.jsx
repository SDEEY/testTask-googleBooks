import s from './BookMainPage.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setBookInfo} from "../../../../redux/reducers/bookPage-reducer";

export default function BookMainPage(props){
    const dispatch = useDispatch()

    return(
        <div className={s.BookMainPageContainer}>
            <NavLink onClick={() => dispatch(setBookInfo(props.info))} to={`/book/${props.id}`}>
                <div className={s.BookMainPageContainerDiv}>
                    <img src={props.imgUrl} alt={'bookImage'}/>
                </div>
            </NavLink>
            <p>{props.categories}</p>
            <p>{props.title}</p>
            <p>{props.authors.map((c, index) => (index ? ', ' : '') + c)}</p>
        </div>
    )
}