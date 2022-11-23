import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


function KitchenSinkExample(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.activity}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {props.type}</ListGroup.Item>
        <ListGroup.Item>Participants: {props.participants}</ListGroup.Item>
        <ListGroup.Item>Duration: {props.duration}</ListGroup.Item>
        <ListGroup.Item>
          Kids Friendly: {props.kidFriendly ? "yes" : "no"}
        </ListGroup.Item>
        <ListGroup.Item>Accessibility: {props.accessibility}</ListGroup.Item>
        <ListGroup.Item>Link: {props.link}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button href="#">Link</Button> <Button type="submit">View</Button>{" "}
        <Button href="#">Link</Button> <Button type="submit">Edit</Button>{" "}
        <Button href="#">Link</Button> <Button type="submit">Delete</Button>{" "}
        <Button variant="primary" href={`/my-activities/edit-activity/id`}>
          View
        </Button>{" "}
        <Button variant="success">Edit</Button>{" "}
        <Button variant="danger">Delete</Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
