import { createContext, useState } from "react";

const navigateContext = createContext({
activity: "",
accessibility: 0,
type: "",
participants: 1,
price: 0,
link: ""
})

// function navigateContextComponent(props){
//     const [activity, setActivity] = useState({
//         activity: "",
//         accessibility: 0,
//         type: "",
//         participants: 1,
//         price: 0,
//         link: ""
//         })
// }

// 2.51 16/11 + 17/11 toda