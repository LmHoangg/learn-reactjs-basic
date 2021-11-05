import React, { useState, useEffect } from 'react';
export default function Content() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const id = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [countDown]);
  // useEffect(() => {
  //   // Ham callback chi được gọi khi mouted lần đầu cho nên giá trị countdown mà nó
  //   // tham chiếu tới là luôn bằng 180 nên phải dùng prev
  //   const id = setInterval(() => {
  //     setCountDown((prev) => prev - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);
  return <div>{countDown}</div>;
}

export default function CountDown2() {
  const [second, setSecond] = useState(9);

  useEffect(() => {
    const seconds =
      second > 0
        ? setTimeout(() => {
            setSecond(second - 1);
            console.log("abc...");
          }, 1000)
        : () => clearTimeout(seconds);
    return () => clearTimeout(seconds);
  }, [second]);

  return (
    <div>
      <h1>{second}</h1>
    </div>
  );
}