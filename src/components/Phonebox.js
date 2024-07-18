import PhoneBar from "./PhoneBar";
import PhoneList from "./PhoneList";

export default function PhoneBox() {

    return (
        <div>
            <div>
                <PhoneBar />
            </div> 
            <div className="cardList">
                <PhoneList/>
            </div>
        </div>
    )
}