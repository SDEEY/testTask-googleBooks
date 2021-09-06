import {apiBooks} from "../../api/api"

const SET_BOOKS_MAIN_PAGE = 'SET_BOOKS_MAIN_PAGE'
const SET_BOOKS_TITLE = 'SET_BOOKS_TITLE'
const SET_BOOKS_ORDER_BY = 'SET_BOOKS_ORDER_BY'
const SET_BOOKS_CATEGORY = 'SET_BOOKS_CATEGORY'
const SET_NUMBER_OF_RESULTS = 'SET_NUMBER_OF_RESULTS'
const SET_START_INDEX = 'SET_START_INDEX'
const SET_BOOKS_LOAD_MORE = 'SET_BOOKS_LOAD_MORE'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    books: null,
    title: '',
    category: '',
    orderBy: 'relevance',
    totalBooks: 1,
    startIndex: 1,
    booksLoadMore: [],
    isLoading: false,
}

const booksMainPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS_MAIN_PAGE:
            return {
                ...state,
                books: action.payload.books
            }
        case SET_BOOKS_LOAD_MORE:
            return {
                ...state,
                books: [...state.books, ...action.payload.booksLoadMore]
            }
        case SET_BOOKS_TITLE:
            return {
                ...state,
                title: action.payload.title
            }
        case SET_BOOKS_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload.orderBy
            }
        case SET_BOOKS_CATEGORY:
            return {
                ...state,
                category: action.payload.category
            }
        case SET_NUMBER_OF_RESULTS:
            return {
                ...state,
                totalBooks: action.payload.totalBooks
            }
        case SET_START_INDEX:
            return {
                ...state,
                startIndex: action.payload.startIndex
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state
    }
}

export const setBooksTitle = (title) => ({type: SET_BOOKS_TITLE, payload: {title}})
export const setBooksOrderBy = (orderBy) => ({type: SET_BOOKS_TITLE, payload: {orderBy}})
export const setBooksCategory = (category) => ({type: SET_BOOKS_CATEGORY, payload: {category}})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, payload: {isLoading}})
const setBooksMainPage = (books) => ({type: SET_BOOKS_MAIN_PAGE, payload: {books}})
const setNumberOfResults = (totalBooks) => ({type: SET_NUMBER_OF_RESULTS, payload: {totalBooks}})
const setBooksLoadMore = (booksLoadMore) => ({type: SET_BOOKS_LOAD_MORE, payload: {booksLoadMore}})
const setStartIndex = (startIndex) => ({type: SET_START_INDEX, payload: {startIndex}})

export const setBooksMainPageTC = (title, category, orderBy, startIndex) => async (dispatch) => {
    const response = await apiBooks.getBooks(title, category, orderBy, startIndex)
    console.log(response)
    response.error ?
        alert(response.error.message) :
        (dispatch(setBooksMainPage(response.items)) && dispatch(setNumberOfResults(response.totalItems)) && dispatch(setIsLoading(false)))
}

export const setBooksLoadMoreTC = (title, category, orderBy, startIndex) => async (dispatch) => {
    const response = await apiBooks.getBooks(title, category, orderBy, startIndex)
    console.log(response)
    response.error ?
        alert(response.error.message) :
        (
            response.items ?
                dispatch(setBooksLoadMore(response.items)) && dispatch(setStartIndex(startIndex)) && dispatch(setIsLoading(false)) :
                dispatch(setIsLoading(false)) && alert('No more books.')
        )
}

export default booksMainPage