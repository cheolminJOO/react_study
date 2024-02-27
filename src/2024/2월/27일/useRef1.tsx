import { useRef, useState } from 'react';

const App = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(1);
  let countVar = 1;

  const onClickRefBtn = () => {
    countRef.current = countRef.current + 1;
  };

  const onClickVarBtn = () => {
    countVar = countVar + 1;
  };

  const onClickRenderBtn = () => {
    setRenderer((prev : number) => prev +1)
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <p>Render : {renderer}</p>
      <button onClick={onClickRenderBtn}>렌더러</button>
      <button onClick={onClickRefBtn}>Ref 올려</button>
      <button onClick={onClickVarBtn}>Var 올려</button>
    </div>
  );
};

export default App;
