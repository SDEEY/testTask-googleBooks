import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import BooksMainPage from "./Components/Routes/BooksMainPage/BooksMainPage";
import BookPage from "./Components/Routes/BookPage/BookPage";
import {useSelector} from "react-redux";

function App() {
    const info = useSelector(state => state.bookPage.info)

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={'/'} component={BooksMainPage}/>
                <Route path={`/book/${info.id}`} component={BookPage}/>
            </Switch>
        </div>
    );
}

export default App;
