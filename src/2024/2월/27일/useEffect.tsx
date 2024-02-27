//app.tsx

import { useState } from 'react';
import Timer from './component/Timer';

const App = () => {
  const [isTimer, setIsTimer] = useState(false);

  const onCLickTimerBtn = () => {
    setIsTimer((prev) => !prev);
  };
  return (
    <div>
      {isTimer && <Timer />}
      <button onClick={onCLickTimerBtn}>Timer</button>
    </div>
  );
};

export default App;


//Timer.tsx

import React, { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
     console.log("타이머가 작동중입니다") 
    }, 1000)
    return () => {
      clearInterval(timer)
      console.log("타이머가 종료됐습니다")
    }
  },[])

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  )
}

export default Timer