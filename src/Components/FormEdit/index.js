import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormEdit(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formActivity">
        <Form.Label>Activity</Form.Label>
        <Form.Control type="activity" placeholder={props.activity} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>Type</Form.Label>
        <Form.Control type="type" placeholder={props.type} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formParticipants">
        <Form.Label>Participants</Form.Label>
        <Form.Control type="participants" placeholder={props.participants} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDuration">
        <Form.Label>Duration</Form.Label>
        <Form.Control type="duration" placeholder={props.duration} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formKidsFriendly">
        <Form.Label>Kids Friendly</Form.Label>
        <Form.Control type="kidFriendly" placeholder={props.kidFriendly} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAccessibility">
        <Form.Label>Accessibility</Form.Label>
        <Form.Control type="accessibility" placeholder={props.accessibility} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLink">
        <Form.Label>Link</Form.Label>
        <Form.Control type="link" placeholder={props.link} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormEdit;
