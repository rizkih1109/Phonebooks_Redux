import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
})

export const loadUser = () => dispatch => request.get('phonebooks').then(({ data }) => {
    dispatch({ type: 'LOAD_USER_SUCCESS', users: data })
}).catch((err) => {
    dispatch({ type: 'LOAD_USER_FAILED' })
})


const addUserFailed = (id) => ({
    type: 'ADD_USER_FAILED',
    id
})

const addUserSuccess = (user) => ({
    type: 'ADD_USER_SUCCESS',
    user
})

const addUserDraw = (user) => ({
    type: 'ADD_USER',
    user
})

export const addUser = (name, phone) => dispatch => {
    const id = Date.now()
    dispatch(addUserDraw({ id, name, phone }))
    return dispatch => request.post('phonebooks', { name, phone }).then(({ data }) => {
        dispatch(addUserSuccess(id, name, phone))
    }).catch((err) => {
        dispatch(addUserFailed(id))
    })
}