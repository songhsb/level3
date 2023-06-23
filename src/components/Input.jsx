import React from "react";
import { useState, useEffect } from "react";
import { StSmallButton } from "./Button";

function Input() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    alert("이름: " + product.name + "가격: " + product.price);
  }, [product]);

  return (
    <div>
      <h1>Input</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newProduct = { name, price };
          setProduct(newProduct);
        }}
      >
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>가격</label>
        <input
          // type="number"
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <StSmallButton color="#81F79F">저장</StSmallButton>
      </form>
    </div>
  );
}

export default Input;
