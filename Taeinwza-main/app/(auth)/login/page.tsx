"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 antialiased">
      <div className="max-w-md w-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
        
        {/* Header & Mascot Image */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 p-2 border border-emerald-100 flex items-center justify-center shadow-xs">
            <img
              src="/image/keroro.png"
              alt="Keroro Login"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
              ยินดีต้อนรับกลับมา!
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              เข้าสู่ระบบเพื่อใช้งานคลังหนังสือและอนิเมะ
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">อีเมล</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-xs bg-slate-50/60 border border-slate-200/80 rounded-xl focus:outline-hidden focus:border-emerald-500 focus:bg-white transition-all text-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">รหัสผ่าน</label>
              <a href="#" className="text-[11px] font-medium text-emerald-600 hover:underline">
                ลืมรหัสผ่าน?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-xs bg-slate-50/60 border border-slate-200/80 rounded-xl focus:outline-hidden focus:border-emerald-500 focus:bg-white transition-all text-slate-800"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-all duration-200 shadow-xs active:scale-98 cursor-pointer mt-2"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        {/* Navigation Switcher & Back Link */}
        <div className="text-center space-y-3 pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            ยังไม่มีบัญชีสมาชิก?{" "}
            <Link href="/register" className="font-bold text-emerald-600 hover:underline">
              สมัครสมาชิกที่นี่
            </Link>
          </p>
          <div>
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors"
            >
              ← กลับหน้าหลัก
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}