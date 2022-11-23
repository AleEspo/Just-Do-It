import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {useParams} from "react-router-dom"


function CardList(props) {
  let {path} = useParams()

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.activity}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Participants: {props.participants}</ListGroup.Item>
        <ListGroup.Item>Duration: {props.duration}</ListGroup.Item>
        <ListGroup.Item>Kids Friendly: {props.kidFriendly ? "yes" : "no"} </ListGroup.Item>
        <ListGroup.Item>Accessibility: {props.accessibility}</ListGroup.Item>
        <ListGroup.Item>Link: {props.link}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" href={props.view}>View</Button>
        <Button variant="success" href={props.edit}>Edit</Button>
        <Button variant="danger" onClick={()=>{
          if(path==="/"){
            return props.fav
          } else {
            return props.delete
          }
        }}>?</Button>
      </Card.Body>
    </Card>
  );
}

export default CardList;
