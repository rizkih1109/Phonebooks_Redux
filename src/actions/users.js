import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
})

export const loadUser = (limit = 25, sort = 'asc', keyword = '') => dispatch => request.get('phonebooks', {
    params: {
        limit, sort, keyword
    }
}).then(({ data }) => {
    dispatch({ type: 'LOAD_USER_SUCCESS', users: data, sort: sort, keyword: keyword })
}).catch((err) => {
    dispatch({ type: 'LOAD_USER_FAILED' })
})

export const addUser = (user) => dispatch => request.post('phonebooks', user).then(({ data }) => {
    dispatch({ type: 'ADD_USER_SUCCESS', data })
}).catch((err) => {
    dispatch({ type: 'ADD_USER_FAILED' })
})

export const updateUser = (id, user) => dispatch => request.put(`phonebooks/${id}`, user).then(({ data }) => {
    dispatch({ type: 'UPDATE_USER_SUCCESS', id, user: data })
}).catch((err) => {
    dispatch({ type: 'UPDATE_USER_FAILED' })
})

export const removeUser = (id) => dispatch => request.delete(`phonebooks/${id}`).then(() => {
    dispatch({ type: 'REMOVE_USER_SUCCESS', id })
}).catch((err) => {
    dispatch({ type: 'REMOVE_USER_FAILED' })
})