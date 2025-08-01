import React, { useMemo } from 'react';

const UseMemoComponent = ({ count }) => {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h3>Expensive Calculation</h3>
      <p>Result: {memoizedValue}</p>
    </div>
  );
};

export default UseMemoComponent;
