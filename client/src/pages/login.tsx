import * as React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
// import firebase from "firebase/app";
// import "firebase/auth";
interface Props {}

interface State {}

class Login extends React.Component<Props, State> {
  state = {};

  loginWithGoogle = () => {};

  render() {
    return (
      <div className='container'>
        <Card>
          <Card.Header className='text-center'>
            <span>Login With Google</span>
          </Card.Header>
          <Card.Body>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/emerging-it/image/upload/v1644921272/social-media/google_ojzfa1.png'
                width={"25px"}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
