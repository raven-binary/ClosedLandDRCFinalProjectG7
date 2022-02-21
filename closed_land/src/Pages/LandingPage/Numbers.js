import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FaSimCard } from "react-icons/fa";

const Numbers = () => {
  return (
    <Container className="numbers">
      <Row className="numberCardGroup">
        <Col>
          <Card className="numberCard">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Daily Sales
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="numberCard">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total Sales
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="numberCard">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Daily ETH Volume
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="numberCard">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700" }}>Num</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total ETH Volume
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Numbers;