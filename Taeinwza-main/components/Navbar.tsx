"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Info", href: "/info" },
    { name: "Book", href: "/book" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/75 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo SVG รูปน้องเขียด/กบสุดรวย + ชื่อแบรนด์ keroruayBook */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-300">
            <svg
              className="w-6 h-6 text-emerald-600 transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* ตาและหัวกบ */}
              <circle cx="7" cy="6" r="3" />
              <circle cx="17" cy="6" r="3" />
              <path d="M12 8c-5.5 0-9 3.5-9 8 0 2.5 2 4.5 4.5 4.5h9c2.5 0 4.5-2 4.5-4.5 0-4.5-3.5-8-9-8z" />
              {/* แว่นตาเพิ่มความเท่/รวย */}
              <circle cx="8.5" cy="12.5" r="2" fill="white" />
              <circle cx="15.5" cy="12.5" r="2" fill="white" />
              <circle cx="8.5" cy="12.5" r="1" fill="#0f172a" />
              <circle cx="15.5" cy="12.5" r="1" fill="#0f172a" />
              <path d="M10.5 12.5h3" stroke="#0f172a" strokeWidth="1" />
              {/* รอยยิ้ม */}
              <path d="M10 16.5c1 1 3 1 4 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
              keroruay<span className="text-emerald-500">Book</span>
            </span>
            <span className="text-[10px] font-medium text-slate-400 -mt-1 tracking-wider uppercase">
              Library Space
            </span>
          </div>
        </Link>

        {/* เมนูตรงกลาง Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 bg-slate-100/60 rounded-full border border-slate-200/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm shadow-slate-200"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ปุ่ม Auth ฝั่งขวา */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-all"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-600 px-4 py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-emerald-500/20 active:scale-95"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;