import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  const someFunction = useCallback (() => { 
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number])

  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  useEffect(() => {
    console.log('sometFuntion이 변경됐습니다.') 
  }, [someFunction])

  return (
    <div>
      <input type='number' value={number} onChange={onChangeNumber} />
      <br />
      <button onClick={someFunction}> Call someFunc</button>
    </div>
  );
};

export default App;
