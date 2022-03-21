import React from "react";
import "./WrongPage.css";
import LogoCube2 from "../../Components/Cube/Cube2";
import { Container } from "react-bootstrap";
import loadingImg from "../images/loading.svg";

const WrongPage = () => {
  return (
    <div className="wrongPage">
      <h1 className="fourOfour animate__animated animate__zoomInLeft animate__delay-1s">
        Error 404!
      </h1>
      <h1 className="animate__animated animate__zoomInDown animate__delay-1s">
        Page Doesn't Exist.
      </h1>
      <img
        src={loadingImg}
        // className="animate__animated animate__zoomInDown animate__delay-1s"
      />
      <div className="wrongPageCube">{/* <LogoCube2></LogoCube2> */}</div>
    </div>
  );
};

export default WrongPage;