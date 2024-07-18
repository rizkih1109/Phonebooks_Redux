import { useSelector, useDispatch } from 'react-redux'
import PhoneCard from "./PhoneCard"
import { useEffect } from 'react'
import { loadUser } from '../actions/users'

export default function PhoneList() {

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log(users.Phonebooks)

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const cards = users.Phonebooks.map((item, index) => (<PhoneCard key={index} user={item} />))

    return cards
}