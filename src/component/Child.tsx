import React, {memo} from 'react';

interface IProps {
  childAge: number;
}

const Child: React.FC<IProps> = ({ childAge }) => {
  return (
    <div>
      <h3>자녀</h3>
      <p>name : 주철민</p>
      <p>age : {childAge}살</p>
    </div>
  );
};

export default memo(Child);
