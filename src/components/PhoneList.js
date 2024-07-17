import PhoneCard from "./PhoneCard"

export default function PhoneList({users = []}) {

    const cards = users.map((item, index) => (<PhoneCard user={item} />)) 

    return cards
}