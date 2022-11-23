import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormEdit(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formActivity">
        <Form.Label>Activity</Form.Label>
        <Form.Select
          id="input-activity"
          type="text"
          name="activity"
          onChange={props.handleChange}
          value={props.activity}
          placeholder="ex: Learn a new language"
        ></Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>Type</Form.Label>
        <Form.Select
          id="input-type"
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

      <Form.Group className="mb-3" controlId="formParticipants">
        <Form.Label>Participants</Form.Label>
        <Form.Select
            id="input-participants"
            type="number"
            name="participants"
            onChange={props.handleChange}
            value={props.participants}
        ></Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDuration">
        <Form.Label>Duration</Form.Label>
        <Form.Select
          id="input-duration"
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

      <Form.Group className="mb-3" controlId="formAccessibility">
        <Form.Label>Accessibility</Form.Label>
        <Form.Select
          id="input-accessibility"
          name="accessibility"
          onChange={props.handleChange}
          value={props.accessibility}
        >
          <option value="few to no challenges">Few to no challenges</option>
          <option value="minor challenges">Minor challenges</option>
          <option value="major challenges">Major challenges</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLink">
        <Form.Label>Link</Form.Label>
        <Form.Select
          id="input-link"
          type="text"
          name="link"
          onChange={props.handleChange}
          value={props.link}
        ></Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formKidsFriendly">
        <Form.Check type="checkbox" label="Kids Friendly" />
        <Form.Select
          id="input-kids"
          type="checkbox"
          name="kidFriendly"
          onChange={props.handleChange}
          value={true}
        ></Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormEdit;
