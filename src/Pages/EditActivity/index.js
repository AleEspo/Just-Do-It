import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

export function EditActivity (){


    const [form, setForm] = useState({
        activity: "",
        accessibility: 0,
        type: "",
        participants: 1,
        price: 0,
        link: "",
    })

    const params = useParams();

    useEffect(()=> {
        async function fetchActivity() {
            try {
                const response = await axios.get(`https://ironrest.cyclic.app/just-do-it/${params.id}`
                );
                setForm(response.data);
            } catch (err) {
                console.log(err)
            }
        }

        fetchActivity()
    }, []);

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){

        e.preventDefault()
        
        try {
            const response = await axios.post("https://ironrest.cyclic.app/just-do-it", {...form, })
            console.log(response.data)
        } catch (err){
            console.log(err)
        }
    }

    return (
        <>
            <h1>Edit Activity</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="input-activity">Activity</label>
                <input id="input-activity" type="text" name="activity" onChange={handleChange} value={form.activity}/>


                <label htmlFor="input-accessibility">Accessibility</label>
                <input id="input-accessibility" type="text" name="accessibility" onChange={handleChange} value={form.accessibility}/>


                <label htmlFor="input-type">Type</label>
                <input id="input-type" type="text" name="type" onChange={handleChange} value={form.type}/>


                <label htmlFor="input-participants">Participants</label>
                <input id="input-participants" type="text" name="participants" onChange={handleChange} value={form.participants}/>


                <label htmlFor="input-price">Price</label>
                <input id="input-price" type="text" name="price" onChange={handleChange} value={form.price}/>


                <label htmlFor="input-availability">Availability</label>
                <input id="input-availability" type="text" name="availability" onChange={handleChange} value={form.availability}/>


                <label htmlFor="input-duration">Duration</label>
                <input id="input-duration" type="text" name="duration" onChange={handleChange} value={form.duration}/>

                <label htmlFor="input-link">Link</label>
                <input id="input-link" type="text" name="link" onChange={handleChange} value={form.link}/>

                <label htmlFor="input-kids">Kid Friendly</label>
                <input id="input-kids" type="boolean" name="kidFriendly" onChange={handleChange} value={form.kidFriendly}/>

                <button>Submit Activity</button>

                <Link to="/my-activities">Back to my Activites</Link>

            </form>
        </>
    )
}