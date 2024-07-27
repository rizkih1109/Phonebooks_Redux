import { useState, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { updateAvatar, updateUser } from "../actions/users"

export default function PhoneCard({ user, modal }) {

    const [isEdit, setIsEdit] = useState(false)
    const [newUser, setNewUser] = useState({ id: user.id, name: user.name, phone: user.phone, avatar: user.avatar })
    const dispatch = useDispatch()
    const fileInputRef = useRef(null)

    const submit = (e) => {
        e.preventDefault()
        dispatch(updateUser(newUser.id, newUser))
        setIsEdit(false)
    }

    const handleImage = (e) => {
        if (e.target.files || e.target.files.length > 0) {
            const file = e.target.files[0]

            const formData = new FormData()
            formData.append('avatar', file)
            console.log(...formData)
            dispatch(updateAvatar(newUser.id, formData))
        } 
    }

    const clickImage = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        setNewUser({ id: user.id, name: user.name, phone: user.phone });
    }, [user]);

    if (isEdit) {
        return (
            <div className="card">
                <div>
                    <img src={user.avatar == null ? '../pictures/Defaultavatar.png' : `http://localhost:3000/images/${user.avatar}`} alt='no source'></img>
                </div>
                <form className="listData" onSubmit={submit}>
                    <div >
                        <input id="edit" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                        <input id="edit" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
                    </div>
                    <div className="saveBtn">
                        <button type="submit" className="fixSaveBtn">
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
                    <img
                        src={user.avatar == null ? '../pictures/Defaultavatar.png' : `http://localhost:3000/images/${user.avatar}`}
                        alt='no source'
                        onClick={clickImage}
                    />
                    <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleImage} />
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