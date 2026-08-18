"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    console.log("Registering with:", {
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 antialiased">

      <div className="max-w-md w-full bg-[#101010] border border-lime-400/20 rounded-3xl p-8 shadow-[0_0_35px_rgba(163,230,53,0.12)] space-y-6">

        {/* OMNITRIX HEADER */}
        <div className="text-center space-y-4">

          {/* Omnitrix */}
          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-800 border-t-lime-400 border-b-lime-400 animate-spin shadow-[0_0_20px_rgba(163,230,53,0.35)]" />

            {/* Omnitrix Body */}
            <div className="w-16 h-16 rounded-full bg-black border-2 border-lime-400 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.45)]">

              {/* Green Core */}
              <div className="w-10 h-10 rounded-full bg-lime-400 border-4 border-gray-900 flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.8)]">

                {/* Center */}
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  <span className="text-[7px] font-black text-lime-400">
                    10
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div>
            <h1 className="text-xl font-black text-white tracking-tight">
              สร้างบัญชีใหม่
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              เข้าร่วมทีมและเข้าสู่จักรวาล Ben 10
            </p>
          </div>

        </div>

        {/* REGISTER FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="space-y-1.5">

            <label className="text-xs font-bold text-gray-300">
              ชื่อผู้ใช้งาน
            </label>

            <input
              type="text"
              placeholder="ชื่อของคุณ"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-xs bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-lime-400 focus:bg-[#080808] transition-all text-white placeholder:text-gray-600"
            />

          </div>

          {/* Email */}
          <div className="space-y-1.5">

            <label className="text-xs font-bold text-gray-300">
              อีเมล
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-xs bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-lime-400 focus:bg-[#080808] transition-all text-white placeholder:text-gray-600"
            />

          </div>

          {/* Password */}
          <div className="space-y-1.5">

            <label className="text-xs font-bold text-gray-300">
              รหัสผ่าน
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-xs bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-lime-400 focus:bg-[#080808] transition-all text-white placeholder:text-gray-600"
            />

          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">

            <label className="text-xs font-bold text-gray-300">
              ยืนยันรหัสผ่าน
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-xs bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-lime-400 focus:bg-[#080808] transition-all text-white placeholder:text-gray-600"
            />

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-lime-400 hover:bg-lime-300 text-black text-xs font-black rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(163,230,53,0.25)] hover:shadow-[0_0_25px_rgba(163,230,53,0.45)] active:scale-95 cursor-pointer mt-2"
          >
            ยืนยันการสมัครสมาชิก
          </button>

        </form>

        {/* Navigation */}
        <div className="text-center space-y-3 pt-4 border-t border-gray-800">

          <p className="text-xs text-gray-500">
            มีบัญชีสมาชิกอยู่แล้ว?{" "}

            <Link
              href="/login"
              className="font-bold text-lime-400 hover:text-lime-300 hover:underline"
            >
              เข้าสู่ระบบที่นี่
            </Link>

          </p>

          <div>
            <Link
              href="/"
              className="text-xs text-gray-600 hover:text-lime-400 font-medium transition-colors"
            >
              ← กลับหน้าหลัก
            </Link>
          </div>

        </div>

        {/* SYSTEM STATUS */}
        <div className="flex items-center justify-center gap-2 pt-1">

          <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.8)]" />

          <span className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.15em]">
            Omnitrix System Online
          </span>

        </div>

      </div>

    </div>
  );
}