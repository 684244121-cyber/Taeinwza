"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Form() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (!title.trim()) {
      alert("กรุณาใส่ชื่อหนังสือ");
      return;
    }

    if (!price || Number(price) < 0) {
      alert("กรุณาใส่ราคาที่ถูกต้อง");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("Book")
        .insert({
          title: title.trim(),
          price: Number(price),
        })
        .select();

      if (error) {
        console.error("SUPABASE ERROR:", error);

        alert(
          `เพิ่มหนังสือไม่สำเร็จ\n\n` +
          `Code: ${error.code}\n` +
          `Message: ${error.message}\n` +
          `Details: ${error.details || "-"}`
        );

        return;
      }

      console.log("เพิ่มข้อมูลสำเร็จ:", data);

      alert("เพิ่มหนังสือสำเร็จ!");

      setTitle("");
      setPrice("");

      // รีเฟรชหน้าเพื่อโหลดข้อมูลจาก Database
      window.location.reload();
    } catch (err) {
      console.error("ERROR:", err);

      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ Supabase");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#101010] p-6 rounded-3xl border border-lime-400/20 shadow-[0_0_30px_rgba(163,230,53,0.08)] space-y-5"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Omnitrix */}
        <div className="w-10 h-10 rounded-full bg-black border-2 border-lime-400 flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.4)]">
          <div className="w-5 h-5 rounded-full bg-lime-400 border-4 border-gray-900" />
        </div>

        <div>
          <h2 className="text-lg font-black text-white">
            เพิ่มข้อมูลหนังสือ
          </h2>

          <p className="text-[10px] text-gray-600 uppercase tracking-wider">
            Omnitrix Database
          </p>
        </div>
      </div>

      {/* ชื่อหนังสือ */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400">
          ชื่อหนังสือ
        </label>

        <input
          type="text"
          placeholder="เช่น Ben 10 Alien Force"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={loading}
          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-lime-400 transition-all disabled:opacity-50"
        />
      </div>

      {/* ราคา */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400">
          ราคา
        </label>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-400 font-bold">
            ฿
          </span>

          <input
            type="number"
            placeholder="199"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            disabled={loading}
            className="w-full pl-9 pr-4 py-3 bg-black border border-gray-800 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-lime-400 transition-all disabled:opacity-50"
          />
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-lime-400 hover:bg-lime-300 disabled:bg-gray-700 disabled:text-gray-500 text-black font-black rounded-xl transition-all active:scale-95"
      >
        {loading ? "กำลังบันทึก..." : "⚡ เพิ่มหนังสือ"}
      </button>
    </form>
  );
}