import { useState, useRef, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const onClickCountBtn = () => {
    setCount((prev) => prev + 1);
    console.log('렌더링 횟수');
  };

  return (
    <div>
      <p>Count : {count}</p>
      <p>렌더링 횟수 : {renderCount.current}</p>
      <button onClick={onClickCountBtn}> count 올려 </button>
      <p></p>
    </div>
  );
};

export default App;
