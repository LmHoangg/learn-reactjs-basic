import React from 'react';
// import './style.css';
import { useState, useRef, useEffect } from 'react';
export default function Content2() {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();
  const [bound, setBound] = useState('');


  // const elemRef = useRef();
  // const [percentNumber, setPercentNumber] = useState(0);

  // useEffect(() => {
  //   elemRef.current.style.width = `${
  //     elemRef.current.getBoundingClientRect().width +
  //     Math.round(Math.random() * 2, 2)
  //   }px`;
  //   setPercentNumber(
  //     Math.ceil(elemRef.current.getBoundingClientRect().width / 8)
  //   );
  // }, [count]);
  // useEffect(() => {
  //   if (elemRef.current.getBoundingClientRect().width > 799) {
  //     alert(
  //       `chúc mừng bạn đã mất vài phút cuộc đời cho cái app nhảm nhí này :))`
  //     );
  //     clearInterval(timerId.current);
  //   }
  // }, [count]);
  // const handleCount = () => {
  //   timerId.current = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1 + Math.ceil(Math.random() * 100));
  // };

  // const handlePause = () => {
  //   clearInterval(timerId.current);
  //   console.log(timerId.current);
  // };


  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    setBound(JSON.stringify(rect));
  }, []);
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <h1>{bound}</h1>
    {/* //cach 2  */}
       {/* <h1>{count}</h1>
      <button className="btn" onClick={handleCount}>
        start
      </button>
      <button className="btn" onClick={handlePause}>
        {" "}
        pause
      </button>

      <div className="loader">
        <div className="progress" ref={elemRef}>
        {percentNumber} %
        </div>
      </div> */}

    </div>
  );
}
