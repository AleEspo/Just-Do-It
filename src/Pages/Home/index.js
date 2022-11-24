import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchActivity } from "../../Components/SearchActivity";
import FormEdit from "../../Components/Form";
import CardList from "../../Components/Cards/CardList";
import { GenRandom } from "../../Components/Cards/RandomCard - inProgress";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import style from "./style.module.css";

export function Home() {
  const [form, setForm] = useState({
    activity: "",
    accessibility: "",
    availability: 0,
    type: "",
    participants: 1,
    duration: "",
    price: 0,
    link: "",
    kidFriendly: false,
  });


  // TOAST aula 16/11 min 58

  // test function to create custom collections based on user IP

  // function getIP(){
  //     function text(url) {
  //         return fetch(url).then(res => res.text());
  //       }

  //       text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  //         let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  //         let ip = data.match(ipRegex)[0];
  //         console.log(ip);
  //         return ip;
  //       });
  // }

  // let IP = ""

  // IP = getIP()

  // console.log(IP)

  // async function createCollectionIP(){
  //     try {
  //         await axios.post(`https://ironrest.cyclic.app/createCollection/${IP}`)
  //         console.log(`https://ironrest.cyclic.app/createCollection/${IP}`)
  //     } catch (err){
  //         console.log(err)
  //     }
  // }

  // createCollectionIP()

  function handleChange(e) {
    if (e.target.id === "input-kids") {
      if (form.kidFriendly === true) {
        setForm({ ...form, kidFriendly: false });
        return;
      } else {
        setForm({ ...form, kidFriendly: true });
        return;
      }
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ironrest.cyclic.app/just-do-it",
        { ...form }

      );

      await axios.post("https://ironrest.cyclic.app/just-do-it-fav");

      setForm({
        activity: "",
        accessibility: "",
        availability: 0,
        type: "",
        participants: 1,
        duration: "",
        price: 0,
        link: "",
        kidFriendly: false,
      });

      toast.success("Activity criated")

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong")
    }
  }

  async function addToFavourite(id) {
    try {
      const favActivity = await axios.get(
        `https://ironrest.cyclic.app/just-do-it/${id}`
      );
      await axios.post(
        `https://ironrest.cyclic.app/just-do-it-fav`,
        favActivity.data
      );
      toast.success("Activity added to My Favourites")
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong")
    }
  }

  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const location = useLocation()

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/just-do-it"
        );
        setActivities(response.data.reverse());
      } catch (err) {
        console.log(err);
      }
    }

    fetchActivity();
  }, []);

  useEffect(() => {
      setFilteredActivities(activities);
  }, [activities]);

  // useEffect(() => {
  //   <GenRandom />;
  // }, []);

  return (
    <div className={style.home}>
      <h1>Just Do It</h1>
      <div>
        <h2>Search activity (form para filtrar as atividades)</h2>
        <SearchActivity
          filteredFunction={setFilteredActivities}
          allActivities={activities}
          className={style.SearchActivity}
        />
      </div>
      <div className={style.container}>
        <div>
          <FormEdit
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            activity={form.activity}
            type={form.type}
            participants={form.participants}
            duration={form.duration}
            accessibility={form.accessibility}
            link={form.link}
            kidFriendly={form.kidFriendly}
          />

          <div>
            <Link to="/my-activities">Go to My Favourites</Link>
          </div>
        </div>
        <div className={style.activities}>
          <div className={style.cards}>
            <h2>All activities (lista de atividades do API)</h2>

            {filteredActivities.map((currentActivity) => {
              return (
                <div key={currentActivity._id}>
                  <CardList
                    activity={currentActivity.activity}
                    type={currentActivity.type}
                    participants={currentActivity.participants}
                    duration={currentActivity.duration}
                    kidFriendly={currentActivity.kidFriendly}
                    accessibility={currentActivity.accessibility}
                    link={currentActivity.link}
                    view={`/my-activities/view-activity/${currentActivity._id}`}
                    function={location.pathname === "/" ? "fav" : "delete"}
                    id={currentActivity._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
