// import React, { ChangeEvent, useCallback, useState } from 'react';
// import Box from './component/Box';

// const App = () => {
//   const [size, setSize] = useState(100);

//   const [isDark, setIsDark] = useState(false);

//   const createBoxStyle = useCallback(() => {
//     return {
//       backgroundColor: 'pink',
//       width: `${size}px`,
//       height: `${size}px`,
//     };
//   },[size]);

//   const onClickBackColor = () => {
//     setIsDark((prev) => !prev);
//   };

//   const onChangeNum = (e: ChangeEvent<HTMLInputElement>) => {
//     setSize(Number(e.target.value));
//   };

//   return (
//     <div style={{ backgroundColor: isDark ? 'black' : 'white' }}>
//       <input type='number' value={size} onChange={onChangeNum} />
//       <button onClick={onClickBackColor}> 배경 색깔 바꾸기</button>
//       <Box createBoxStyle={createBoxStyle} />
//     </div>
//   );
// };

// export default App;
