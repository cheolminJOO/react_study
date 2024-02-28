import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark); // false
  return (
    <header
      className='header'
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>안녕하세요 주철민입니다. !</h1>
    </header>
  );
};

export default Header;
