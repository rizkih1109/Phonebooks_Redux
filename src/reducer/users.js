const users = (state = { Phonebooks: [], limit: 25, page: 1, total: 1, pages: 1 }, action) => {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return { ...action.users }

        case 'ADD_USER_SUCCESS':
            return [...state, action.user]

        case 'UPDATE_USER_SUCCESS':
            return {
                Phonebooks: state.Phonebooks.map((item) => {
                    if (item.id === action.id) {
                        item.name = action.user.name;
                        item.phone = action.user.phone;
                    }
                    return item;
                })
            }

        case 'REMOVE_USER_SUCCESS':
            return {
                ...state,
                Phonebooks: state.Phonebooks.filter(item => item.id !== action.id)
            }

        case 'LOAD_USER_FAILED':
        case 'ADD_USER_FAILED':
        case 'UPDATE_USER_FAILED':
        case 'REMOVE_USER_FAILED':

        default:
            return state
    }
}


export default users