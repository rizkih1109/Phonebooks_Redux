import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addUser } from "../actions/users"


export default function AddPhone() {

    const [newUser, setNewUser] = useState({ name: '', phone: '' })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const cancel = () => navigate('/')
    const submit = (e) => {
        dispatch(addUser(newUser))
        navigate('/')
    }

    return (
        <form className="formCon" onSubmit={submit}>
            <input id="name" placeholder="name" onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
            <input id="phone" placeholder="phone" onChange={(e) => setNewUser({...newUser, phone: e.target.value})} />
            <div className="addBtn">
                <button className="add" type="submit">save</button>
                <button className="add" onClick={cancel} >cancel</button>
            </div>
        </form>
    )
}