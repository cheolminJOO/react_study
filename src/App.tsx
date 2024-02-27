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
