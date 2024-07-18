export default function PhoneCard({ user }) {

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
                    <i className="fa-solid fa-pen-to-square btn"></i>
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>
    )
}