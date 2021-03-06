import React from "react";
import errorImage from "./error.png";
import {
  CardContainer,
  CardImage,
  CardDetailsContainer,
  CardTitle,
  CardContent,
  CardImageWrapper,
  CardContainerElements,
  CardAlignContainer,
  CardLeftAlignContainer,
} from "./CardElement";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Cards = (props) => {
  // const displayDetails = () => {
  //   console.log(props.ID);
  // };
  return (
    <CardContainerElements>
      <CardContainer
        onClick={props.displayDetails}
        // to={{
        //   pathname: "/details",
        //   state: { id: props.ID },
        // }}
        // malID={props.ID}
      >
        <CardImageWrapper>
          <CardImage src={props.imageSource} alt="" />
        </CardImageWrapper>
        <CardAlignContainer>
          <CardDetailsContainer>
            <CardTitle
              style={{
                textAlignLast: "left",
                paddingLeft: "3px",
              }}
            >
              {props.collection}
            </CardTitle>
            <CardContent
              style={{
                textAlignLast: "left",
                paddingLeft: "3px",
              }}
            >
              RK:{" "}
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlignLast: "left",
                }}
              >
                {props.collectionName}
              </span>
            </CardContent>
          </CardDetailsContainer>
          <CardLeftAlignContainer>
            <CardTitle
              style={{
                textAlignLast: "right",
                color: "#33383d",
              }}
            >
              _
            </CardTitle>
            <CardContent>
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlignLast: "right",
                }}
              >
                {props.collectionPrice}
              </span>
            </CardContent>
          </CardLeftAlignContainer>
        </CardAlignContainer>
      </CardContainer>
    </CardContainerElements>
  );
};

export default Cards;
