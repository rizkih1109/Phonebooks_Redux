const users = (state = { Phonebooks: [] }, action) => {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return { ...action.users }

        case 'LOAD_USER_FAILED':
            return state

        case 'ADD_USER':
            return [...state, action.user]

        default:
            return state
    }
}


export default users