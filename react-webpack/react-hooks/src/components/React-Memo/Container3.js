import React from 'react';
// import './style.css';
import Content3 from './Content3';
import { useState, useCallback } from 'react';
export default function Container3() {
  const [count, setCount] = useState(1);
  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <div>
      <Content3 onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}