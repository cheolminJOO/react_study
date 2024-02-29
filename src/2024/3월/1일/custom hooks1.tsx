import { useEffect, useRef } from 'react';
import { useInput } from './customHooks/useInput';



const App = () => {
  const [inputValue, onChangeValue, onClickAlert] = useInput(
    ""
  );

  const focusRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
      console.log(focusRef);
    }
  });

  return (
    <div>
      <h1>useInput</h1>
      <input ref={focusRef} value={inputValue} onChange={onChangeValue} />
      <button onClick={onClickAlert}>확인</button>
    </div>
  );
};

export default App;
