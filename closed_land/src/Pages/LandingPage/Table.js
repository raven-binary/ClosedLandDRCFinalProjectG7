import React, { useEffect } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./LandingPage.css";

let testData = [
  {
    name: "CryptoPunks",
    image_url:
      "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
    stats: {
      floor_price: 14.18,
      one_day_change: 0.08208649636186115,
      seven_day_change: 0.6932444513088206,
      total_volume: 842609.8428493055,
    },
  },
  {
    name: "Azuki",
    image_url:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
    stats: {
      floor_price: null,
      one_day_change: -0.06423173959428809,
      seven_day_change: 0.17868895653326272,
      total_volume: 114730.62944187163,
    },
  },
  {
    name: "Tasty Bones XYZ",
    image_url:
      "https://lh3.googleusercontent.com/pFx2k4GbEd30FbIPOGagqG646QGUk-0Ns8n6kSgozxY4aJSI2AYm1a_Acvu0jngeIx7hSeZeZTHLKUiUEt9qXfE-DWRmJyZJQ_AnKA=s120",
    stats: {
      floor_price: 1.1,
      one_day_change: -0.7578312459646487,
      seven_day_change: 0,
      total_volume: 7397.572734682764,
    },
  },
  {
    name: "mfers",
    image_url:
      "https://lh3.googleusercontent.com/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw=s120",
    stats: {
      floor_price: 98,
      one_day_change: -0.03450260672295463,
      seven_day_change: -0.11099514357838806,
      total_volume: 397128.3576695282,
    },
  },
  {
    name: "CryptoPunks",
    image_url:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
    stats: {
      floor_price: 3,
      one_day_change: 0.30406417364081934,
      seven_day_change: 1.5077550151934536,
      total_volume: 13710.919722314218,
    },
  },
];

const Table = ({ collections }) => {
  console.log(testData);
  return (
    <Container className="table" id="Table">
      <Col className="stats">
        <h1 id="h1Stats">Top Collections Over</h1>
        <DropdownButton id="dropdown-stats" title="Last 24 Hours" align="end">
          <Dropdown.Item id="dropdownItem" href="#/action-1">
            Last 7 Days
          </Dropdown.Item>
          <Dropdown.Item id="dropdownItem" href="#/action-2">
            Last 30 Days
          </Dropdown.Item>
        </DropdownButton>
      </Col>
      <Container className="tableLP">
        {testData.map((col, index) => {
          return (
            <Row key={index} className="tableRow" id="row">
              <Col className="tableText" id="numRow">
                <Col id="pNum">
                  <p>{index}</p>
                </Col>
                <Col className="rowImage" id="imageRow">
                  <img className="tableImage" src={col.image_url} alt="" />
                </Col>
                <Col className="rowName" id="nameRow">
                  <p>{col.name}</p>
                  <p>{col.stats.floor_price}</p>
                </Col>
              </Col>
              <Col className="rowStats" id="statsRow">
                <Row className="innerRow">
                  <p>{col.stats.seven_day_change.toFixed(2)}</p>
                </Row>
                <Row className="innerRow">
                  <img src="src/Pages/images/logo.svg" alt="" />
                  <p>{col.stats.total_volume.toFixed(0)}</p>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Row id="rankButton">
        <Button className="rankingsButton">See More Rankings</Button>
      </Row>
    </Container>
  );
};

export default Table;