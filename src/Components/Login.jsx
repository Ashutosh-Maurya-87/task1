import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormCheck,
  FormGroup,
  Figure,
} from "react-bootstrap";
import "./LoginPage.css";
import LoginUpImage from "././Images/Vector 95.png";
import maskGroup from "././Images/Mask group.png";
import CamIcon from "././Images/CamIcon.png";
import loginImage from "././Images/loginheading.png";
const Login = () => {
  const spotQuots = "SpotQuest";
  return (
    <>
      <Form>
        <Container fluid>
          <Row>
            <Col xs={5} className="left_Col">
              <div className="text-color">
                <span>Back</span>
                <Figure>
                  <Figure.Image
                    width={140}
                    height={139}
                    alt="171x180"
                    src={CamIcon}
                    className="camicon"
                  />
                  {/* <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </Figure.Caption> */}
                </Figure>
                {/* <div className="iconClass">
                  <img src={CamIcon} className=" d-flex" />
                </div> */}
                <div className="text-align">
                  <span>Welcome to {spotQuots}</span>
                </div>
                <p className="bottom-text">
                  We help you find the perfect spot
                  <p className="text"> for your next Project </p>
                </p>
                <div>
                  <Figure>
                    <Figure.Image
                      width={140}
                      height={139}
                      src={maskGroup}
                      className="maskgroup"
                    />
                    {/* <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </Figure.Caption> */}
                  </Figure>
                </div>
              </div>
            </Col>
            <Col xs={7}>
              <div className="right-side_up ">
                <img className="image" src={LoginUpImage} />
              </div>
              <Form className="loginForm">
                <img src={loginImage} className="loginImageClass" />
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label className="lable">User Name*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="rounded-pill w-50"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label className="lable">Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="rounded-pill w-50"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex rememberPass"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="#" label="Forgot Password" className="forgotPass">
                    Forgot Password
                  </a>
                </Form.Group>

                <Button
                  className="btn rounded-pill submit-btn"
                  type="submit"
                  size="md"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default Login;
