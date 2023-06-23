import React from "react";
import { styled } from "styled-components";

function Select() {
  return (
    <StSelectDiv>
      <h1>Select</h1>
      <div>
        <StSelect>
          <option value="americano">아메리카노</option>
          <option value="caffe latte">카페라테</option>
          <option value="cafe au lait">카페오레</option>
          <option value="espresso">에스프레소</option>
        </StSelect>
        <StSelect>
          <option value="americano">아메리카노</option>
          <option value="caffe latte">카페라테</option>
          <option value="cafe au lait">카페오레</option>
          <option value="espresso">에스프레소</option>
        </StSelect>
      </div>
    </StSelectDiv>
  );
}

const StSelectDiv = styled.div`
  height: 200px;
  margin: 5px;
  padding-left: 5px;
  /* z-index: 999; */
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const StSelect = styled.select`
  width: 200px;
  height: 40px;
  margin-right: 5px;
  /* z-index: 999; */
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  /* overflow: hidden; */
`;

export default Select;
