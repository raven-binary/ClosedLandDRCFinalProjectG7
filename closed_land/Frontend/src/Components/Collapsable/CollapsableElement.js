import Styled, { keyframes } from "styled-components";

export const ButtonContainer = Styled.button`
  background-color: transparent;
  border-bottom: 1px solid rgb(141, 141, 141) !important;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 10px;

  &:hover{
  background-color: #073636;
  }
`;

export const ContentContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-family: "Sora";
`;

export const ItemCountContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ItemNumber = Styled.span`
  padding-right: 8px;
  font-family: "Sora";
`;
