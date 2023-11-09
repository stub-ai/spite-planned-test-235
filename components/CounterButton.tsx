import { useState } from 'react';
import Link from 'next/link';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
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
  );
};

export default CounterButton;