import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./LoginPage.css";
import LoginUpImage from "././Images/Vector 95.png";
import maskGroup from "././Images/Mask group.png";
import CamIcon from "././Images/CamIcon.png";
const Login = () => {
  const spotQuots = "SpotQuest";
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={5} className="left_Col">
            {/* <i class="fa fa-arrow-left" aria-hidden="!true"></i> */}

            <div className="text-color">
              <span>Back</span>
              <div className="iconClass">
                <img src={CamIcon} className=" d-flex" />
              </div>
              <div className="text-align">
                <span>Welcome to {spotQuots}</span>
              </div>
              <p className="bottom-text">
                We help you find the perfect spot
                <p className="text"> for your next Project </p>
              </p>
              <div>
                <img src={maskGroup} className="maskIcon" />
              </div>
            </div>
          </Col>
          <Col xs={7}>
            <div className="right-side_up ">
              <img className="image" src={LoginUpImage} />
            </div>
            <div className="right_side d-flex flex-column">
              <span>Login</span>
              <label>User Name</label>
              <input type="text" placeholder="Enter username/Email" />
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <div class="row rememberpass mx-5 mb-4">
                <input type="checkbox">Remember Me</input>
                <a href="#" class="forgotLink">
                  Forgot my Password
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
