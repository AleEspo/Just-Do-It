import { useState } from "react"
import axios from "axios"

export function Home (){


    const [form, setForm] = useState({
        activity: "",
        accessibility: 0,
        type: "",
        participants: 1,
        price: 0,
        link: "",
    })

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
            <h1>Just Do It</h1>

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


                <label htmlFor="input-link">Link</label>
                <input id="input-link" type="text" name="link" onChange={handleChange} value={form.link}/>

                <button>Submit Activity</button>
            </form>
        </>
    )
}