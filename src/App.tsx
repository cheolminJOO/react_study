import React from 'react';

const App = () => {
  const object = {
    name: '별코딩',
    main: function () {
      console.log(this);
    },
  };

  object.main();
  return <div>App</div>;
};

export default App;
