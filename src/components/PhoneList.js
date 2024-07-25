import { useSelector, useDispatch } from 'react-redux'
import PhoneCard from "./PhoneCard"
import { useEffect, useState } from 'react'
import { loadUser } from '../actions/users'
import Modal from './Modal'


export default function PhoneList() {

    const [isModal, setIsModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const modal = (user) => {
        setSelectedUser(user)
        setIsModal(true)
    }

    const cards = users.Phonebooks.map((item, index) => (<PhoneCard key={index} user={item} modal={modal} />))

    return (
        <>
            {cards}
            {isModal && <Modal user={selectedUser} setIsModal={setIsModal} />}
        </>
    )
}