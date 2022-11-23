import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchActivity } from "../../Components/SearchActivity";

export function Home() {
  const [form, setForm] = useState({
    activity: "",
    accessibility: 0,
    type: "",
    participants: 1,
    price: 0,
    link: "",
  });

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
      setForm({
        activity: "",
        accessibility: 0,
        type: "",
        participants: 1,
        price: 0,
        link: "",
    })
    } catch (err) {
      console.log(err);
    }
  }

  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([])

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
      <div>
        <h2>Form para adicionar atividades no API - mudar de pagina</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-activity">Activity</label>
          <input
            id="input-activity"
            type="text"
            name="activity"
            onChange={handleChange}
            value={form.activity}
          />

          <label htmlFor="input-accessibility">Accessibility</label>
          <input
            id="input-accessibility"
            type="text"
            name="accessibility"
            onChange={handleChange}
            value={form.accessibility}
          />

          <label htmlFor="input-type">Type</label>
          <input
            id="input-type"
            type="text"
            name="type"
            onChange={handleChange}
            value={form.type}
          />

          <label htmlFor="input-participants">Participants</label>
          <input
            id="input-participants"
            type="text"
            name="participants"
            onChange={handleChange}
            value={form.participants}
          />

          <label htmlFor="input-price">Price</label>
          <input
            id="input-price"
            type="text"
            name="price"
            onChange={handleChange}
            value={form.price}
          />

          <label htmlFor="input-availability">Availability</label>
          <input
            id="input-availability"
            type="text"
            name="availability"
            onChange={handleChange}
            value={form.availability}
          />

          <label htmlFor="input-duration">Duration</label>
          <input
            id="input-duration"
            type="text"
            name="duration"
            onChange={handleChange}
            value={form.duration}
          />

          <label htmlFor="input-link">Link</label>
          <input
            id="input-link"
            type="text"
            name="link"
            onChange={handleChange}
            value={form.link}
          />

          <label htmlFor="input-kids">Kid Friendly</label>
          <input
            id="input-kids"
            type="boolean"
            name="kidFriendly"
            onChange={handleChange}
            value={form.kidFriendly}
          />

          <button>Submit Activity</button>
        </form>
        <Link to="/my-activities">My Activities</Link>
      </div>
      <div>
        <h2>Form para filtrar as atividades</h2>
        < SearchActivity filteredFunction={setFilteredActivities} allActivities={activities}/>
      </div>
      <div>
        <h2>Lista de atividades do API</h2>
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
            </div>
          );
        })}
      </div>
    </>
  );
}

// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Link } from "react-router-dom"

// export function Home (){

//     const [formSubmitted, setFormSubmitted] = useState(false)

//     const [form, setForm] = useState({
//         activity: "",
//         accessibility: 0,
//         type: "",
//         participants: 1,
//         price: 0,
//         link: "",
//     })

//     function handleChange(e){
//         setForm({...form, [e.target.name]: e.target.value})
//     }

//     async function handleSubmit(e){

//         e.preventDefault()

//         try {
//             const response = await axios.post("https://ironrest.cyclic.app/just-do-it", {...form, })
//             setFormSubmitted(true)
//         } catch (err){
//             console.log(err)
//         }
//     }

//     useEffect(()=>{
//         function returnForm(){
//             setFormSubmitted(false)
//             return (
//                 <>
//                     <h1>Just Do It</h1>

//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="input-activity">Activity</label>
//                         <input id="input-activity" type="text" name="activity" onChange={handleChange} value={form.activity}/>

//                         <label htmlFor="input-accessibility">Accessibility</label>
//                         <input id="input-accessibility" type="text" name="accessibility" onChange={handleChange} value={form.accessibility}/>

//                         <label htmlFor="input-type">Type</label>
//                         <input id="input-type" type="text" name="type" onChange={handleChange} value={form.type}/>

//                         <label htmlFor="input-participants">Participants</label>
//                         <input id="input-participants" type="text" name="participants" onChange={handleChange} value={form.participants}/>

//                         <label htmlFor="input-price">Price</label>
//                         <input id="input-price" type="text" name="price" onChange={handleChange} value={form.price}/>

//                         <label htmlFor="input-availability">Availability</label>
//                         <input id="input-availability" type="text" name="availability" onChange={handleChange} value={form.availability}/>

//                         <label htmlFor="input-duration">Duration</label>
//                         <input id="input-duration" type="text" name="duration" onChange={handleChange} value={form.duration}/>

//                         <label htmlFor="input-link">Link</label>
//                         <input id="input-link" type="text" name="link" onChange={handleChange} value={form.link}/>

//                         <label htmlFor="input-kids">Kid Friendly</label>
//                         <input id="input-kids" type="boolean" name="kidFriendly" onChange={handleChange} value={form.kidFriendly}/>

//                         <button>Submit Activity</button>
//                     </form>
//                     <Link to="/my-activities">My Activities</Link>
//                 </>
//             )
//         }

//         returnForm()

//     }, [formSubmitted])
// }
