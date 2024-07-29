const users = (state = { Phonebooks: [], limit: 25, page: 1, total: 1, pages: 1 }, action) => {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return { ...action.users, sort: action.sort, keyword: action.keyword, page: action.page }

        case 'LOAD_PAGE_SUCCESS':
            return {
                ...state,
                Phonebooks: [...state.Phonebooks, ...action.users.Phonebooks], page: action.page
            }

        case 'ADD_USER_SUCCESS':
            return [...state, action.user]

        case 'UPDATE_USER_SUCCESS':
            console.log(state.sort)
            console.log(state.keyword)
            const update = state.Phonebooks.map(item => item.id === action.id ? { ...item, ...action.user } : item)
            const updateSort = update.sort((a, b) => {
                if (state.sort === 'asc') return a.name.localeCompare(b.name)
                else if (state.sort === 'desc') return b.name.localeCompare(a.name)
                return 0;
            })
            const updateSearch = updateSort.filter(item => {
                return item.name.toLowerCase().includes(state.keyword.toLowerCase()) ||
                    item.phone.toLowerCase().includes(state.keyword.toLowerCase())
            })

            return {
                ...state,
                Phonebooks: updateSearch
            }

        case 'UPDATE_AVATAR_SUCCESS':
            return {
                ...state,
                Phonebooks: state.Phonebooks.map(item => item.id === action.id ? { ...item, avatar: action.avatar } : item)
            }

        case 'REMOVE_USER_SUCCESS':
            return {
                ...state,
                Phonebooks: state.Phonebooks.filter(item => item.id !== action.id)
            }

        case 'LOAD_USER_FAILED':
        case 'LOAD_PAGE_FAILED':
        case 'ADD_USER_FAILED':
        case 'UPDATE_USER_FAILED':
        case 'UPDATE_AVATAR_FAILED':
        case 'REMOVE_USER_FAILED':

        default:
            return state
    }
}


export default users