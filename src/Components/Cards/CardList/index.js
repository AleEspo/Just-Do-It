import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {useLocation} from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import style from "./style.module.css"


function CardList(props) {
  let location = useLocation()

  async function addToFavourite(id) {
    try {
      const favActivity = await axios.get(
        `https://ironrest.cyclic.app/just-do-it/${id}`
      );

      delete favActivity.data._id

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

  async function handleDelete(id) {
    try {
      console.log(id)
      await axios.delete(`https://ironrest.cyclic.app/just-do-it-fav/${id}`);
      props.setIsDeleted(true);
      toast.success("Note deleted")
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong")
    }
  }

  return (
    <Card style={{ width: "18rem" }} className={style.card}>
      <Card.Body>
        <Card.Title>{props.activity}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {props.type ? props.type : "/"}</ListGroup.Item>
        <ListGroup.Item>Participants: {props.participants}</ListGroup.Item>
        <ListGroup.Item>Duration: {props.duration}</ListGroup.Item>
        <ListGroup.Item>Kids Friendly: {props.kidFriendly ? "yes" : "no"} </ListGroup.Item>
        <ListGroup.Item>Accessibility: {props.accessibility}</ListGroup.Item>
        <ListGroup.Item>Link: {props.link ? props.link : "/"}</ListGroup.Item>
      </ListGroup>
      <Card.Body className={style.button}>
          {props.origin==="viewPage" ? null : <Button variant="primary" href={props.view}>View</Button>}
          {/* <Button variant="success" href={props.edit}>Edit</Button> */}
        {/* {props.function=== "fav" ? ()=> { return (
          <Button variant="primary" href={props.view}>View</Button>
            )} : ""
            } */}
        {props.function=== "fav" || props.origin==="viewPage" ? null : <Button variant="success" href={props.edit}>Edit</Button>}
        {props.origin==="viewPage" ? null : <Button variant="danger" onClick={()=>{
          if(props.function==="fav"){
            addToFavourite(props.id)
          } else {
            handleDelete(props.id)
          }
        }}>{props.function==="fav" ? "Add to Fav" : "Delete"}</Button>
        }
      </Card.Body>
    </Card>
  );
}

export default CardList;
