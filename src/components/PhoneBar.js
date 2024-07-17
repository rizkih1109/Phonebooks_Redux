import { Link } from "react-router-dom";

export default function PhoneBar() {
    return (
        <div className='topBar'>
            <button className='barBtn'><i className="fa-solid fa-arrow-up-z-a"></i></button>
            <input type='text' placeholder='Search...' />
            <Link to="/add">
                <button className='barBtn'><i className="fa-solid fa-user-plus"></i></button>
            </Link>
        </div>
    )
}