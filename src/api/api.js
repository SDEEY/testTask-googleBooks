const key = 'AIzaSyCq7rB95WTI83PE0zMDWILm7Mx7qKbzmzA'

export const apiBooks = {
    async getBooks(title, category, orderBy, startIndex) {
        if (category) {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${key}`)
            return response.json()
        } else {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${key}`)
            return response.json()
        }
    }
}