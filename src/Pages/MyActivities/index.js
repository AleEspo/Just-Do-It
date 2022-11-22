import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function MyActivities() {
  const [activities, setActivities] = useState([]);
  const [isDelete, setIsDeleted] = useState(false)

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/just-do-it"
        );

        setActivities(response.data);
        setIsDeleted(false) // seria melhor separar o setState e o param que o useEffect està olhando criando outro useEffect
      } catch (err) {
        console.log(err);
      }
    }

    fetchActivity();
  }, [isDelete]);

  // toast "Are you sure you want to delete?" min 2.37 pula pra -> 2.45 aula 18/11 sexta

  async function handleDelete(id){
    try {
      axios.delete(`https://ironrest.cyclic.app/just-do-it/${id}`)
      setIsDeleted(true)

    } catch (err){
      console.log(err)
    }
  }


  return (
    <>
      <h1>My Activities</h1>

      {activities.map((currentActivity) => {
        return (
          <div key={currentActivity._id}>
            <h4>{currentActivity.activity}</h4>
            <p>{currentActivity.type}</p>
            <p>{currentActivity.paticipants}</p>
            <p>{currentActivity.accessibility}</p>
            <p>{currentActivity.price}</p>
            <p>Kids Friendly: {currentActivity.kidFriendly ? "Yes" : "No  " }</p>
            <Link
              to={`/my-activities/view-activity/${currentActivity._id}`}
              className="m-3"
            >
              {" "}
              View Activity
            </Link>
            <Link
              to={`/my-activities/edit-activity/${currentActivity._id}`}
              className="m-3"
            >
              {" "}
              Edit Activity
            </Link>
            <button onClick={()=>{
              handleDelete(currentActivity._id)
            }} >Delete note</button>
          </div>
        );
      })}
    </>
  );
}
