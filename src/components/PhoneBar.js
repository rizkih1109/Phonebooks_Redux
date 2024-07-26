import { Link } from "react-router-dom";

export default function PhoneBar({ sort, setSort, keyword, setKeyword }) {

    const search = (event) => {
        const { value } = event.target
        setKeyword(value)
    }

    const sorting = () => {
        const newSort = sort === 'asc' ? 'desc' : 'asc'
        setSort(newSort)
    }

    return (
        <div className='topBar'>
            <button className="barBtn" onClick={sorting}>
                {sort === 'asc' || sort.sort === 'asc' ? <i className="fa-solid fa-arrow-down-z-a"></i> : <i className="fa-solid fa-arrow-up-z-a"></i> }
            </button>
            <input type='text' value={keyword} onInput={search} placeholder='Search...' />
            <Link to="/add">
                <button className='barBtn'><i className="fa-solid fa-user-plus"></i></button>
            </Link>
        </div>
    )
}