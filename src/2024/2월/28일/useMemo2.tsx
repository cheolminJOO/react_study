import React, { ChangeEvent, useEffect, useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = {
    country: isKorea ? '한국' : '해외',
  };
  const onChangeTimes = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const onClickBtn = () => {
    setIsKorea((prev: boolean) => !prev);
  };

  useEffect(() => {
    console.log('리렌더링 됐습니다');
  }, [location.country]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type='number' value={number} onChange={onChangeTimes} />
      <hr />
      <h2> 어느 나라에 있습니까?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={onClickBtn}>비행기 타자</button>
    </div>
  );
};

export default App;
