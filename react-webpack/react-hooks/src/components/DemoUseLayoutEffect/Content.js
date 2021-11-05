import React from 'react';
import './style.css';
import { useState, useEffect, useLayoutEffect } from 'react';
export default function Content() {
  const [count, setCount] = useState(1);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}
