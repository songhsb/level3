import React from "react";
import { styled } from "styled-components";

function Button() {
  return (
    <div>
      <h1>Button</h1>
      <div>
        <StLargeButton
          borderColor="#81F79F"
          onClick={() => alert("버튼이 눌렸습니다.")}
        >
          Large PriMary Button &gt;
        </StLargeButton>
        <StMediumButton color="#81F79F">Medium</StMediumButton>
        <StSmallButton color="#81F79F">Small</StSmallButton>
      </div>
      <div>
        <StLargeButton
          borderColor="#F7BE81"
          onClick={() => prompt("버튼이 눌렸습니다.")}
        >
          Large Negative Button &#128276;
        </StLargeButton>
        <StMediumButton color="#F7BE81">Medium</StMediumButton>
        <StSmallButton color="#F7BE81">Small</StSmallButton>
      </div>
    </div>
  );
}

export const StLargeButton = styled.button`
  border: 3px solid ${(props) => props.borderColor};
  background-color: white;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  margin: 10px;
  cursor: pointer;
`;

export const StMediumButton = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 160px;
  height: 45px;
  margin: 10px;
  cursor: pointer;
`;

export const StSmallButton = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 100px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
`;

export default Button;
