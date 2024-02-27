import { ChangeEvent, useState } from 'react';

const App = () => {
  const [names, setNames] = useState(["주철민"]);
  const [name , setName] = useState('')

  const onChangeName = (e : ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onClickSubmitBtn = () => {
    setNames((prev) => {
      console.log("prev",prev)
    return [name, ...prev]})
  }

  return (
    <div>
      <p>이름을 입력하시면 출력됩니다.</p>
      <div>
        <input onChange={onChangeName} type='text' />
        <button onClick={onClickSubmitBtn}>등록</button>
      </div>
      {names.map((name) => (
        <h1>{name}</h1>
      ))}
    </div>
  );
};

export default App;
