"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-5">

      {/* Minus */}
      <button
        onClick={() => setCount(count - 1)}
        className="w-10 h-10 bg-black hover:bg-gray-900 text-lime-400 font-black rounded-full border-2 border-lime-400/40 hover:border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.15)] hover:shadow-[0_0_15px_rgba(163,230,53,0.35)] transition-all active:scale-90 flex items-center justify-center text-lg"
      >
        −
      </button>

      {/* Omnitrix Display */}
      <div className="relative w-16 h-16 rounded-full bg-black border-4 border-gray-800 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.3)]">

        {/* Green ring */}
        <div className="absolute inset-1 rounded-full border-2 border-lime-400/60" />

        {/* Number */}
        <span className="relative text-xl font-black text-lime-400 min-w-[32px] text-center">
          {count}
        </span>

      </div>

      {/* Plus */}
      <button
        onClick={() => setCount(count + 1)}
        className="w-10 h-10 bg-lime-400 hover:bg-lime-300 text-black font-black rounded-full shadow-[0_0_12px_rgba(163,230,53,0.4)] hover:shadow-[0_0_20px_rgba(163,230,53,0.6)] transition-all active:scale-90 flex items-center justify-center text-lg"
      >
        +
      </button>

    </div>
  );
}