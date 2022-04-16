import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="home-main">
      <Container className="landing-page-container">
        <Row>
          <div className="intro-text">
            <div>
              <h1>COVID-19 Resource Dashboard</h1>
              <p>A central location for all mental health related resources.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button className="landingbutton">Login</Button>
              </Link>

              <Link to="/signup">
                <Button className="landingbutton" variant="outline-primary">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
