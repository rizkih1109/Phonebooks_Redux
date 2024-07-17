import PhoneBar from "./PhoneBar";
import PhoneList from "./PhoneList";

export default function PhoneBox() {

    const users = [
        {name: 'Nida', phone: '081220001'},
        {name: 'Ninda', phone: '081220002'},
        {name: 'Tesa', phone: '081220003'},
        {name: 'Andini', phone: '081220004'},
        {name: 'Ratih', phone: '081220005'},
        {name: 'Nurul', phone: '081220006'},
        {name: 'Ghita', phone: '081220007'}
    ]

    return (
        <div>
            <div>
                <PhoneBar />
            </div>
            <div className="cardList">
                <PhoneList users={users} />
            </div>
        </div>
    )
}