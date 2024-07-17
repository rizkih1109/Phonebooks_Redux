import { useNavigate } from "react-router-dom"

export default function AddPhone() {

    const navigate = useNavigate()
    const cancel = () => navigate('/')

    return (
        <form className="formCon">
            <input id="name" placeholder="name" />
            <input id="phone" placeholder="phone" />
            <div className="addBtn">
                <button className="add" type="submit">save</button>
                <button className="add" onClick={cancel}>cancel</button>
            </div>
        </form>
    )
}