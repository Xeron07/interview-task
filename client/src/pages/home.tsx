import * as React from "react";
import { useDispatch } from "react-redux";
import { apiCallBegan } from "../features/middleware/api";
import { memberList } from "../features/memberReducer";
import { Card, Row, Col, Button } from "react-bootstrap";

interface Props {}

interface State {
  abc: String;
}

function Home() {
  const dispatch = useDispatch();
  const getMembers = () => {
    dispatch(
      apiCallBegan({
        url: "/api/member/all",
        method: "get",
        data: {},
        onSuccess: memberList.type,
      })
    );
  };
  return (
    <div className='container'>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <div className=' text-center'>
                <Button variant='primary' onClick={() => getMembers()}>
                  Members List
                </Button>
              </div>
            </Col>
            <Col>
              <div className=' text-center'>
                <Button variant='primary'>Add Member</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
