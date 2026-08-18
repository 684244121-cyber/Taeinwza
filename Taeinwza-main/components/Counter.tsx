"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="w-10 h-10 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all active:scale-95 flex items-center justify-center text-base"
      >
        -
      </button>
      <span className="text-lg font-bold text-slate-800 min-w-[32px] text-center">
        {count}
      </span>
      <button
        onClick={() => setCount(count + 1)}
        className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-xs transition-all active:scale-95 flex items-center justify-center text-base"
      >
        +
      </button>
    </div>
  );
}