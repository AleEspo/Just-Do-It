import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardList from "../../Components/Cards/CardList";
import { useLocation } from "react-router-dom"
import style from "./style.module.css";
import Button  from "react-bootstrap/Button";

export function Favourite() {
  const [activities, setActivities] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const location = useLocation()

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/just-do-it-fav"
        );
        setActivities(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchActivity();
  }, [isDeleted]);


  useEffect(()=>{
    setIsDeleted(false)
  }, [activities])

  async function handleDelete(id) {
    try {
      axios.delete(`https://ironrest.cyclic.app/just-do-it-fav/${id}`);
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>My Favourite Activities</h1>
      <div className={style.favourite}>
        {activities.map((currentActivity) => {
          return (
            <CardList
              key={currentActivity._id}
              activity={currentActivity.activity}
              type={currentActivity.type}
              participants={currentActivity.participants}
              duration={currentActivity.duration}
              kidFriendly={currentActivity.kidFriendly}
              accessibility={currentActivity.accessibility}
              link={currentActivity.link}
              view={`/my-activities/view-activity/${currentActivity._id}`}
              edit={`/my-activities/edit-activity/${currentActivity._id}`}
              setIsDeleted={setIsDeleted}
              function={location.pathname === "/" ? "fav" : "delete"}
              id={currentActivity._id}
            />
          );
        })}
      </div>
      <div className={style.linkButton}>
        <Link className={style.link} to="/">
              <Button className={style.button} variant="info">
                  Back to activity list
              </Button>
          </Link>
      </div>
    </>
  );
}
