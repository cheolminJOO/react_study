import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDark,setIsDark } = useContext(ThemeContext);
  const onClickBtn = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <footer
      className='footer'
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <button className='button' onClick={onClickBtn}>
        다크모드
      </button>
    </footer>
  );
};

export default Footer;
