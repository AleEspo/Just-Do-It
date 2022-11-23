import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchActivity } from "../../Components/SearchActivity";


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
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  }

  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/just-do-it"
        );

        setActivities(response.data);
        setFilteredActivities(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchActivity();
  }, []);

  return (
    <>
      <h1>Just Do It</h1>
      <FormEdit />
      <div>
        <h2>Form para adicionar atividades no API - mudar de pagina</h2>
        <form onSubmit={handleSubmit}>
          <br />
          <label htmlFor="input-activity">Activity</label>
          <input
            id="input-activity"
            type="text"
            name="activity"
            onChange={handleChange}
            value={form.activity}
            placeholder="ex: Learn a new language"
          />

          <br />

          <label htmlFor="input-type">Type</label>
          <select
            id="input-type"
            name="type"
            onChange={handleChange}
            value={form.type}
          >
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option vlaue="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busy Work</option>
          </select>
          {/* <input
            id="input-type"
            type="text"
            name="type"
            onChange={handleChange}
            value={form.type}
          /> */}

          <br />

          <label htmlFor="input-participants">Participants</label>
          <input
            id="input-participants"
            type="number"
            name="participants"
            onChange={handleChange}
            value={form.participants}
          />

          <br />

          <label htmlFor="input-accessibility">Accessibility</label>
          <select
            id="input-accessibility"
            name="accessibility"
            onChange={handleChange}
            value={form.accessibility}
          >
            <option value="few to no challenges">Few to no challenges</option>
            <option value="minor challenges">Minor challenges</option>
            <option value="major challenges">Major challenges</option>
          </select>
          {/* <input
  id="input-accessibility"
  type="number"
  name="accessibility"
  onChange={handleChange}
  value={form.accessibility}
/> */}

          <br />

          <label htmlFor="input-price">Price</label>
          <input
            id="input-price"
            type="number"
            name="price"
            onChange={handleChange}
            value={form.price}
          />

          <br />

          <label htmlFor="input-availability">Availability</label>
          <input
            id="input-availability"
            type="number"
            name="availability"
            onChange={handleChange}
            value={form.availability}
          />

          <br />

          <label htmlFor="input-duration">Duration</label>
          <select
            id="input-duration"
            name="duration"
            onChange={handleChange}
            value={form.duration}
          >
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
          </select>
          {/* <input
            id="input-duration"
            type="text"
            name="duration"
            onChange={handleChange}
            value={form.duration}
          /> */}

          <br />

          <label htmlFor="input-link">Link</label>
          <input
            id="input-link"
            type="text"
            name="link"
            onChange={handleChange}
            value={form.link}
          />

          <br />

          <label htmlFor="input-kids">Kid Friendly</label>
          <input
            id="input-kids"
            type="checkbox"
            name="kidFriendly"
            onChange={handleChange}
            value={true}
          />

          <br />

          <button>Create new Activity</button>
        </form>
        <br />
        <Link to="/my-activities">My Favourites</Link>
      </div>

      <div>
        <h2>Search activity (form para filtrar as atividades)</h2>
        <SearchActivity
          filteredFunction={setFilteredActivities}
          allActivities={activities}
        />
      </div>
      <div>
        <h2>All activities (lista de atividades do API)</h2>
        {filteredActivities.map((currentActivity) => {
          return (
            <div key={currentActivity._id}>
              <h4>{currentActivity.activity}</h4>
              <p>{currentActivity.type}</p>
              <p>{currentActivity.paticipants}</p>
              <p>{currentActivity.accessibility}</p>
              <p>{currentActivity.price}</p>
              <p>
                Kids Friendly: {currentActivity.kidFriendly ? "Yes" : "No  "}
              </p>
              <button
                onClick={() => {
                  addToFavourite(currentActivity._id);
                }}
              >
                Add to my favourites
              </button>
            </div>
          );
        })}
      </div>
      {/* {useEffect(() => {
        function activityList() {
          return (
            <>
              <div>
                <h2>All activities (lista de atividades do API)</h2>
                {filteredActivities.map((currentActivity) => {
                  return (
                    <div key={currentActivity._id}>
                      <h4>{currentActivity.activity}</h4>
                      <p>{currentActivity.type}</p>
                      <p>{currentActivity.paticipants}</p>
                      <p>{currentActivity.accessibility}</p>
                      <p>{currentActivity.price}</p>
                      <p>
                        Kids Friendly:{" "}
                        {currentActivity.kidFriendly ? "Yes" : "No  "}
                      </p>
                      <button
                        onClick={() => {
                          myActivities.push(currentActivity);
                        }}
                      >
                        Add to my activities
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          );
        }
        activityList();
      }, [activities])} */}
    </>
  );
}
