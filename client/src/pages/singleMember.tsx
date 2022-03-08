import React, { PureComponent } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function SingleMember() {
  const member: any = useSelector((state: any) => {
    return state.members.selectedMember;
  });
  return (
    <div className='container'>
      <div>
        <img src={member.img} width='200' height='200' />
      </div>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter name'
            value={member.name}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Age</Form.Label>
          <Form.Control type='number' placeholder='Age' value={member.age} />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type='text'
            placeholder='nationality'
            value={member.nationality}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SingleMember;
