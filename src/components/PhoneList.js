import { useSelector, useDispatch } from 'react-redux'
import PhoneCard from "./PhoneCard"
import { useEffect, useState } from 'react'
import { loadUser, loadPage } from '../actions/users'
import Modal from './Modal'


export default function PhoneList({ sort, keyword }) {

    const dispatch = useDispatch()
    const [isModal, setIsModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const users = useSelector(state => state.users)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            if (scrollTop + clientHeight >= scrollHeight - 1) {
                const newPage = page + 1
                setPage(newPage)
                dispatch(loadPage(newPage, 25, sort, keyword))
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch, page, sort, keyword])

    useEffect(() => {
        setPage(1)
        dispatch(loadUser(1, 25, sort, keyword))
    }, [dispatch, sort, keyword])

    const modal = (user) => {
        setSelectedUser(user)
        setIsModal(true)
    }

    const cards = users.Phonebooks.map((item) => (<PhoneCard key={item.id} user={item} modal={modal} />))

    return (
        <>
            {cards}
            {isModal && <Modal user={selectedUser} setIsModal={setIsModal} />}
        </>
    )
}