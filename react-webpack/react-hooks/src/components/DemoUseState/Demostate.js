import { useState } from "react";

function Demostate() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    // => around function viết ngắn gọn của function
    setCounter(counter + 1);
  };

  const [info, setInfo] = useState({
    name: "Nguyen van A",
    tuoi: 25,
    soThich: "choi co"
  });

  const handleInfo = () => {
    setInfo((prev) => ({
      ...info,
      bio: "hello anh em"
    }));
  };

  const order = [100, 200, 200];

  const [callback, setCallback] = useState(() => {
    const total = order.reduce((total, cur) => total + cur);
    return total;
  });

  const handleCallback = () => {
    setCallback((prevState) => prevState + 1);
  };

  const [many, setMany] = useState(1);

  const handleManyByCallBack = () => {
    setMany((prevState) => prevState + 1);
    setMany((prevState) => prevState + 1);
    setMany((prevState) => prevState + 1);
  };

  return (
    <div  style={{ padding: 20 }}>
      <h1>BT1: Tang gia tri</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}> Increases</button>
      <h1>BT2: Thay doi gia tri cua object</h1>
      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleInfo}>Change</button>
      <h1>
        BT3: Sử dụng callback cho thằng useState. Đoạn này thằng useState dùng
        giá trị của thằng function để làm giá trị chứ k phải thằng function
      </h1>
      <h2>
        {" "}
        Thay vì tính toán 1 hàm rồi bỏ vào hàm setState : Có nghĩa initState ->
        nhận return function làm initState, tức là nó không phải lấy ngoài để
        phải gọi lại thêm 1 lần nữa ấy. Cho vào để nó lấy cái giá trị đầu làm
        luôn chứ k ra 2 giá trị phiền não
      </h2>
      <h1>{callback}</h1>
      <button onClick={handleCallback}> callback</button>
      <h1>{many}</h1>
      <button onClick={handleManyByCallBack}>
        {" "}
        sử dụng nhiều hàm trong useState
      </button>
    </div>
  );
}

export default Demostate;
