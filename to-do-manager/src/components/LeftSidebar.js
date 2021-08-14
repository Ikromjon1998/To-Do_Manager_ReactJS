
import { useContext, useState } from "react";
import Filter from "./components/Context";

const filters = [
    {text: "All", className: "list-item", default: true},
    {text: "Important", className: "list-item", default: false},
    {text: "Today", className:"list-name", dafault: false},
    {text: "Next 7 days", className:"list-name", dafault: false},
    {text: "Private", className:"list-name", dafault: false}
]



const LeftSidebar = (props) => {
    let [active, setActive] = useState('Active');
    let value = useContext(Filter); 

    
    return (
        <>

        </>
    );
}

export default LeftSidebar;

