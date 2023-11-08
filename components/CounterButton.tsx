import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
      onClick={() => setCount(count + 1)}
    >
      Clicked {count} times
    </button>
  );
};

export default CounterButton;