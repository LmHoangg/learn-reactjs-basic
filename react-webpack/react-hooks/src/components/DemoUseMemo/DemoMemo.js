import { useState, useMemo, useRef } from "react";
import React from "react";
export default function DemoMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [product, setProduct] = useState([]);
  const handleSubmit = () => {
    setProduct([
      ...product,
      {
        name,
        price: +price
      }
    ]);
  };
  const nameRef = useRef();
  const total = useMemo(() => {
    const result = product.reduce((cur, item) => {
      return cur + item.price;
    }, 0);
    console.log("tinh toan Lai");
    setName("");
    setPrice("");
    // nameRef.current.focus();
    return result;
  }, [product]);
  return (
    <div className="App">
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Add
      </button>
      <div>Total: {total}</div>
      {product.map((item, index) => (
        <li key={index}>
          {item.name} - {item.price}
        </li>
      ))}
    </div>
  );
}
