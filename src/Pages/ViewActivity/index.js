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


    // SE VEM DO HOME -> add ID to just-do-it
    // SE VEM DO FAV -> add ID to -fav
    // O ID JA TA CERTO, TEM QUE DEFINIR EM QUAL API VAI! CONTEXT?

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
        <div className={style.linkButton}>
            <Link className={style.link} to="/">
                <Button className={style.button} variant="info">
                    Back to activity list
                </Button>
            </Link>
        </div>
        <div className={style.linkButton}>
        <Link className={style.link} to="/my-activities">
          <Button className={style.button} variant="info">
            Back to My Favourites
          </Button>
        </Link>
      </div>
     </div>
    )
}
