"use client";

import { createBook } from "@/utils/actions";
import { useActionState } from "react";

const Form = () => {
  const [message, formAction, pending] = useActionState(createBook, null);

  return (
    <div className="w-full max-w-md mx-auto my-8 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 tracking-tight">
        เพิ่มหนังสือใหม่
      </h2>

      {message && (
        <div
          className={`p-3 mb-6 text-sm rounded-lg transition-all ${
            message.includes("successfully")
              ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
              : "bg-rose-50 text-rose-600 border border-rose-100"
          }`}
        >
          {message}
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            ชื่อหนังสือ
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="เช่น Node.js Web Development"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            ราคา (บาท)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            placeholder="เช่น 350"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full py-3 px-4 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mt-2"
        >
          {pending ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
        </button>
      </form>
    </div>
  );
};

export default Form;