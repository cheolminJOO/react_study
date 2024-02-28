// import { ChangeEvent, useState } from 'react';

// const hardCalculator = (number: number) => {
//   console.log('어려운 계산기');
//   for (let i = 0; i < 999; i++) {}
//   return number + 10000;
// };

// const easyCalculator = (number: number) => {
//   console.log('쉬운 계산기');
//   return number + 1;
// };

// const App = () => {
//   const [hardNumber, setHardNumber] = useState(1);
//   const [easyNumber, setEasyNumber] = useState(1)
//   const hardSum = hardCalculator(hardNumber);
//   const easySum = easyCalculator(easyNumber)
//   const onChangeCal = (e: ChangeEvent<HTMLInputElement>) => {
//     setHardNumber(parseInt(e.target.value));
//   };

//   const onChangeEasyCal = (e: ChangeEvent<HTMLInputElement>) => {
//     setEasyNumber(parseInt(e.target.value));
//   };

//   return (
//     <div>
//       <h3>어려운 계산기</h3>
//       <input type='number' value={hardNumber} onChange={onChangeCal} />
//       <span>+ 10000 = {hardSum}</span>
//       <h3>쉬운 계산기</h3>
//       <input type='number' value={easyNumber} onChange={onChangeEasyCal} />
//       <span>+ 1 = {easySum}</span>
//     </div>
//   );
// };

// export default App;
