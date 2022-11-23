import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export function ViewActivity() {
    const params = useParams();

    const [activity, setActivities] = useState({})

    useEffect(() => {
        async function fetchActivity() {
            try {
                const response = await axios.get(`https://ironrest.cyclic.app/just-do-it/${params.id}`
                );
                setActivities(response.data);
            } catch (err) {
                console.log(err)
            }
        }

        fetchActivity()
    }, []);

    return (
        <>
            <h1>{activity.activity}</h1>
            <p>Type: {activity.type}</p>
            <p>Participants: {activity.participants}</p>
            <p>Duration: {activity.duration}</p>
            <p>Kids Friendly: {activity.kidFriendly ? "Yes" : "No" }</p>
            <Link to="/my-activities">Back to my Activites</Link>
        </>
    )
}
