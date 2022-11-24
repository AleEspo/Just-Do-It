import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormEdit(props) {
  return (
    <Form onSubmit={props.handleSubmit} style={{ width: "18rem" }}>
      <Form.Group className="mb-3" controlId="input-activity">
        <Form.Label>Activity</Form.Label>
        <Form.Control
          type="text"
          name="activity"
          onChange={props.handleChange}
          value={props.activity}
          placeholder="ex: Learn a new language"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-type">
        <Form.Label>Type</Form.Label>
        <Form.Select
          name="type"
          onChange={props.handleChange}
          value={props.type}
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
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-participants">
        <Form.Label>Participants</Form.Label>
        <Form.Control
          type="number"
          name="participants"
          onChange={props.handleChange}
          value={props.participants}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-duration">
        <Form.Label>Duration</Form.Label>
        <Form.Select
          name="duration"
          onChange={props.handleChange}
          value={props.duration}
        >
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-accessibility">
        <Form.Label>Accessibility</Form.Label>
        <Form.Select
          name="accessibility"
          onChange={props.handleChange}
          value={props.accessibility}
        >
          <option value="few to no challenges">Few to no challenges</option>
          <option value="minor challenges">Minor challenges</option>
          <option value="major challenges">Major challenges</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-link">
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          name="link"
          onChange={props.handleChange}
          value={props.link}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-kids">
        <Form.Check
          type="checkbox"
          label="Kids Friendly"
          name="kidFriendly"
          onChange={props.handleChange}
          value={props.kidFriendly}
          checked={props.kidFriendly ? true : false}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormEdit;
