import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "../actions/users"

export default function PhoneCard({ user, modal }) {

    const [isEdit, setIsEdit] = useState(false)
    const [newUser, setNewUser] = useState({ id: user.id, name: user.name, phone: user.phone })
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        dispatch(updateUser(newUser.id, newUser))
        setIsEdit(false)
    }

    if (isEdit) {
        return (
            <div className="card">
                <div>
                    <img src="../images/Defaultavatar.png" alt='no source' />
                </div>
                <form className="listData" onSubmit={submit}>
                    <div >
                        <input id="edit" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
                        <input id="edit" value={newUser.phone} onChange={(e) => setNewUser({...newUser, phone: e.target.value})} />
                    </div>
                    <div className="saveBtn">
                        <button type="submit">
                            <i className="fa-solid fa-floppy-disk" ></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className="card">
                <div>
                    <img src="../images/Defaultavatar.png" alt='no source' />
                </div>
                <div className="listData">
                    <div >
                        <p>{user.name}</p>
                        <p >{user.phone}</p>
                    </div>
                    <div className="listBtn">
                        <i className="fa-solid fa-pen-to-square btn" onClick={() => setIsEdit(true)}></i>
                        <i className="fa-solid fa-trash-can" onClick={() => modal(user)}></i>
                    </div>
                </div>
            </div>
        )
    }
}