import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" shadow-lg rounded-lg p-6 max-w-sm w-full bg-white">
        <h1 className="text-3xl font-bold mb-4 text-center">Compteur</h1>
        <h2 className="text-2xl mb-4 text-center">{count}</h2>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => setCount(count + 1)}
          >
            Plus
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Moins
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => setCount(0)}
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
