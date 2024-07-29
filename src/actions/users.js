import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
})

export const loadUser = (page = 1, limit = 25, sort = 'asc', keyword = '') => dispatch => request.get('phonebooks', {
    params: { limit, sort, keyword, page }
}).then(({ data }) => {
    dispatch({ type: 'LOAD_USER_SUCCESS', users: data, sort: sort, keyword: keyword, page: page })
}).catch((err) => {
    dispatch({ type: 'LOAD_USER_FAILED' })
})

export const loadPage = (page = 2, limit = 25, sort = 'asc', keyword = '') => dispatch => request.get('phonebooks', {
    params: { limit, sort, keyword, page }
}).then(({ data }) => {
    dispatch({ type: 'LOAD_PAGE_SUCCESS', users: data, sort: sort, keyword: keyword, page: page })
}).catch((err) => {
    dispatch({ type: 'LOAD_PAGE_FAILED' })
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

export const updateAvatar = (id, file) => dispatch => request.put(`phonebooks/${id}/avatar`, file, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}).then(({ data }) => {
    console.log('berhasil')
    dispatch({ type: 'UPDATE_AVATAR_SUCCESS', id, avatar: data.avatar })
}).catch((err) => {
    console.log('gagal')
    dispatch({ type: 'UPDATE_AVATAR_FAILED' })
})

export const removeUser = (id) => dispatch => request.delete(`phonebooks/${id}`).then(() => {
    dispatch({ type: 'REMOVE_USER_SUCCESS', id })
}).catch((err) => {
    dispatch({ type: 'REMOVE_USER_FAILED' })
})
