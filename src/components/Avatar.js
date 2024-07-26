import { useNavigate } from "react-router-dom"

export default function Avatar() {

    const navigate = useNavigate()

    return (
        <form className="formCon">
            <input type="file" />
            <img src="../images/Defaultavatar.png" alt='no source' />
            <div>
                <i className="fa-solid fa-floppy-disk"></i>
                <i className="fa-solid fa-arrow-rotate-left" onClick={() => navigate('/')}></i>
            </div>
        </form>
    )
}