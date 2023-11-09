import { useState } from 'react';
import Link from 'next/link';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="space-x-4">
      <Link href="/">
        <a>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
            onClick={() => setCount(count + 1)}
          >
            Clicked {count} times
          </button>
        </a>
      </Link>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 active:bg-red-700 focus:outline-none"
        onClick={resetCount}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterButton;