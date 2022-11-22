import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function MyActivities (){

    const [activities, setActivities] = useState([])

    useEffect(() => {
        async function fetchActivity(){
            try {
                const response = await axios.get("https://ironrest.cyclic.app/just-do-it")
                
                setActivities(response.data)

            } catch (err){
                console.log(err)
            }
        }

        fetchActivity()
    }, [])

    return (
        <>
        <h1>My Activities</h1>

        {activities.map((currentActivity)=> {
            return <div key={currentActivity._id}>
                <h4>{currentActivity.activity}</h4>
                <p>{currentActivity.type}</p>
                <p>{currentActivity.paticipants}</p>
                <p>{currentActivity.accessibility}</p>
                <p>{currentActivity.price}</p>
                <Link to={`${currentActivity._id}`}> Edit Activity</Link>
            </div>
        })}
        </>
    )
}
