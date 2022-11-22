import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"

export function EditActivity() {
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
    }, []);

    return (
        <h1>Aqui a gente vai modificar as notas</h1>
    )
}