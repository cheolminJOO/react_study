import React, { useState } from 'react';
import Child from './component/Child';

const App = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const plusParenetsAge = () => {
    setParentAge((prev) => prev + 1);
  };

  const plusChildAge = () => {
    setChildAge((prev) => prev + 1);
  };
  return (
    <div>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={plusParenetsAge}>부모 나이</button>
      <button onClick={plusChildAge}>자녀 나이</button>
      <Child childAge={childAge} />
    </div>
  );
};

export default App;
