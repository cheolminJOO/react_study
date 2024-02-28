import { useEffect, useRef } from 'react';

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef); => {current : input}
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const onClickLoginBtn = () => {
    alert(`환영합니다 ! ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='username' />
      <button onClick={onClickLoginBtn}>로그인</button>
    </div>
  );
};

export default App;
