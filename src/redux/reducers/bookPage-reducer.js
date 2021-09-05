const SET_BOOK_INFO = 'SET_BOOK_INFO'

const initialState = {
    info: ''
}

const bookPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_INFO:
            return {
                ...state,
                info: action.payload.info
            }
        default:
            return state
    }
}

export const setBookInfo = (info) => ({type: SET_BOOK_INFO, payload: {info}})


export default bookPage