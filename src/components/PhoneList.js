import { useSelector, useDispatch } from 'react-redux'
import PhoneCard from "./PhoneCard"
import { useEffect, useState } from 'react'
import { loadUser, updateUser } from '../actions/users'
import Modal from './Modal'


export default function PhoneList({ sort, keyword }) {

    const [isModal, setIsModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser(25, sort, keyword))
    }, [dispatch, sort, keyword])

    const modal = (user) => {
        setSelectedUser(user)
        setIsModal(true)
    }

    const handleUpdate = (id, user) => {
        dispatch(updateUser(id, user)).then(() => {
            dispatch(loadUser(sort, keyword))
        })
    }

    const cards = users.Phonebooks.map((item) => (<PhoneCard key={item.id} user={item} modal={modal} />))

    return (
        <>
            {cards}
            {isModal && <Modal user={selectedUser} setIsModal={setIsModal} handleUpdate={handleUpdate} />}
        </>
    )
}