import { useParams, useLocation } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import CardList from "../../Components/Cards/CardList";
import style from "./style.module.css";
import Button from "react-bootstrap/Button";

export function ViewActivity(props) {
    const params = useParams();

    const location= useLocation()

    const [activity, setActivities] = useState({})

    useEffect(() => {
        async function fetchActivity() {
            try {
                let response
                if (await axios.get(`https://ironrest.cyclic.app/just-do-it/${params.id}`)){
                    response = await axios.get(`https://ironrest.cyclic.app/just-do-it/${params.id}`
                );} else {
                    response = await axios.get(`https://ironrest.cyclic.app/just-do-it-fav/${params.id}`
                );
                }
            
                setActivities(response.data);
            } catch (err) {
                console.log(err)
            }
        }

        fetchActivity()
    }, []);

    return (
      <div className={style.viewActivity}>
        <CardList
          key={activity._id}
          activity={activity.activity}
          type={activity.type}
          participants={activity.participants}
          duration={activity.duration}
          kidFriendly={activity.kidFriendly}
          accessibility={activity.accessibility}
          link={activity.link}
          view={`/my-activities/view-activity/${activity._id}`}
          edit={`/my-activities/edit-activity/${activity._id}`}
          function={location.pathname === "/" ? "fav" : "delete"}
          id={activity._id}
        />

        {/* <h1>{activity.activity}</h1>
            <p>Type: {activity.type}</p>
            <p>Participants: {activity.participants}</p>
            <p>Duration: {activity.duration}</p>
            <p>Kids Friendly: {activity.kidFriendly ? "Yes" : "No" }</p>
            <Link to="/">Go to Activity list</Link>
            <Link to="/my-activities">Back to My Favourites</Link> */}

        <Button className={style.button} variant="info">
          <Link className={style.link} to="/">
            Go to Activity list
          </Link>
        </Button>

        <Button className={style.button} variant="secondary">
          <Link className={style.link} to="/my-activities">
            Back to My Favourites
          </Link>
        </Button>
      </div>
    );
}
