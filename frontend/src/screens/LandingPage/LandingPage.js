import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
// import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div classname="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">COVID-19 Resource Dashboard</h1>
              <p classname="subtitle">
                A central location for all mental health related resources.
              </p>
            </div>
            <div className="buttonContainer">
              {/* <Link to="/login"> */}
              <Button size="lg" className="landingbutton">
                Login
              </Button>
              {/* </Link> */}

              {/* <Link to="/register"> */}
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Sign Up
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
