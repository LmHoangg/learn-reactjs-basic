import React from 'react';
function Content3({ onIncrease }) {
  console.log('re-render');
  return (
    <>
      <h1>Hello</h1>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
}
export default React.memo(Content3);
