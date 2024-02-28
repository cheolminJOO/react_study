import { useState } from 'react';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
    //ThemeContext가 감싸주는 모든 하위컴포넌트는 value로 감싸준 것들을 props 없이 사용할 수 있다

    //App 컴포넌트에서 Context를 불러와서 모든 하위 컴포넌트들에게 나 필요한 사람 하고 방송하고 있음

    // 만약 여기서 value에 아무것도 안 넣고 보내면, 하위 컴포넌트는 createContext의 초기값을 받는다
  );
};

export default App;
