// import React, { useEffect, useState } from 'react';

// interface IProps {
//   createBoxStyle: () => {
//     backgroundColor: string;
//     width: string;
//     height: string;
//   };
// }

// const Box: React.FC<IProps> = ({ createBoxStyle }) => {
//   const [style, setStyle] = useState({});

//   useEffect(() => {
//     console.log('박스 키우기');
//     setStyle(createBoxStyle());
//   }, [createBoxStyle]);
//   return <div style={style}></div>;
// };

// export default Box;
