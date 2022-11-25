import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FormEdit from "../../Components/Form";
import { propTypes } from "react-bootstrap/esm/Image";
import style from "./style.module.css"


// pra criar Toast apos de ser redirecionado, video de quarta 16/11 min 2.41 + 17/11 toda
// so redirect video 16/11 min 2.39

export function EditActivity() {
  const params = useParams();

  const navigate = useNavigate();

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

  console.log(form);

  // outro setState pra colocar un titulo fixo em cima da pagina de edição; só const não funciona?
  const [prevState, setPrevState] = useState({
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

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/just-do-it-fav/${params.id}`
        );

        delete response.data._id;

        setForm(response.data);
        setPrevState(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchActivity();
  }, []);

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
      const response = await axios.put(
        `https://ironrest.cyclic.app/just-do-it-fav/${params.id}`,
        form
      );
      navigate("/my-activities");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className={style.editActivity}>
        
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
      </div>
      <div className={style.linkButton}>
        <Link className={style.link} to="/my-activities">
          <Button className={style.button} variant="info">
            Back to My Favourites
          </Button>
        </Link>
      </div>
    </>
  );
}
